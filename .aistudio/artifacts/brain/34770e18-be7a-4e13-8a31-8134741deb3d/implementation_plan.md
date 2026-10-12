# Media Hub Gallery Image Deletion & Placement Cleanup

A comprehensive image deletion workflow for the RS Andrews Media Hub (`/pictures`) allowing administrators to delete both custom uploaded assets and built-in catalog images, with safeguards that warn about and automatically clean up associated page placements and hero banners.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed during requirements clarification and guide this implementation:

- **Deletable Image Scope**: Both custom uploaded pictures and built-in catalog images can be deleted directly from the Media Hub gallery.
- **Active Placement Handling**: When an image is deleted, a confirmation modal alerts the user to all active page placements (heroes, body sections, sidebars) and automatically unassigns and deletes those placements upon confirmation.
- **Catalog Restoration Safety**: To prevent accidental irreversible loss of built-in assets, a "Restore Catalog Defaults" action will be available to un-delete default catalog images at any time.

---

## 1. Overview & Core Concept

- **What It Does**: Adds an explicit, accessible "Delete" action to every image card in the Media Hub gallery. When clicked, it assesses whether the image is in active use across the site. If so, a structured modal details every page where the image is published before executing a full cleanup.
- **Target Audience / Persona**: Site administrators, marketers, and contractors managing the RS Andrews Emergency Plumbing & HVAC website visuals.
- **Key Value**: Eliminates obsolete or unwanted photos from the media gallery, prevents broken image references on live service pages, and synchronizes deletion directly to site data files (`image-placements.json`).

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Direct Card Deletion**:
   - The user opens `/pictures` (Media Hub) and views the gallery.
   - Each card in the grid displays action buttons: `⚡ Set as Hero`, `📌 Place`, `📋 Path`, and a dedicated danger button `🗑️ Delete`.
2. **Impact Detection & Confirmation Modal**:
   - If the image has **no active placements**: A swift confirmation prompt asks the user to confirm deletion of the photo.
   - If the image **is currently placed** on pages (e.g., Homepage hero, Water Heater Repair sidebar): A styled confirmation modal appears detailing:
     - The image title and preview thumbnail.
     - A list of all affected placements (Zone & Page URL).
     - A clear warning that proceeding will remove those placements from the live site.
     - Actions: `Cancel` (secondary, safe) and `Delete Image & Remove Placements` (red danger button).
3. **Execution & Immediate Feedback**:
   - The image is removed from the active library view.
   - Any placements referencing that image are filtered out.
   - The updated state is saved to client storage and synced to the server (`/api/sync-placements.json`).
   - The gallery, placement table, thumbnail strip, and badge counters re-render instantly without page reload.
   - A toast notification confirms: *"Removed '[Image Name]' and cleaned up [X] active placement(s)"*.
4. **Catalog Recovery**:
   - If default catalog images have been deleted, a subtle `"Restore Catalog"` control appears in the gallery header so administrators can easily recover factory assets without manual data editing.

### Visual Identity & Theme

- **Design Tone**: High-utility administrative console with strict zero-pill discipline and clear visual hierarchy matching the RS Andrews brand guidelines (Deep Navy `#0a2540`, Industrial Red `#d9381e` for destructive actions, Slate `#64748b` for subtle labels).
- **Destructive Button Styling**: Clean border-based danger button (`#fee2e2` hover background, `#b91c1c` text, subtle `1px solid #fca5a5` border) with zero pill boxing.
- **Confirmation Modal**: Centered modal overlay with soft backdrop blur (`rgba(10, 37, 64, 0.45)`), prominent preview badge, tabular placement list, and WCAG AA contrast.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Handling Built-In Catalog Images vs Custom Uploads**
  - *Chosen Approach*: Support deleting both. Custom uploads are removed from storage and disk sync. Built-in catalog images are placed in a persistent exclusion list (`deletedCatalogImages`) that hides them from the gallery and dropdown pickers, with a 1-click restore mechanism.
  - *Why*: Allows users to tailor their gallery to only the images they actually want to use, without breaking source code dependencies or permanently destroying core repository assets.
- **Decision 2: Automated Placement Cascading Cleanup**
  - *Chosen Approach*: Automatically delete all placements referencing the image when deletion is confirmed.
  - *Why*: Prevents orphaned placement entries from rendering broken image placeholders or missing hero banners on customer-facing service pages.
- **Decision 3: Server Data Persistence**
  - *Chosen Approach*: Persist deletions via `/api/sync-placements.json` so deletions persist across preview reloads, live builds, and admin sessions.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        RS ANDREWS MEDIA HUB                            │
│                        /src/pages/pictures                             │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌───────────────────────┐                           ┌────────────────────┐
│   Gallery Card Grid   │                           │  Placements Table  │
│  [Delete Image Click] │                           │   & Hero Manager   │
└──────────┬────────────┘                           └─────────▲──────────┘
           │                                                  │
           ▼                                                  │
┌────────────────────────────────────────────────────────┐    │
│            Placement Impact Assessment                 │    │
│   placements.filter(p => p.image === targetImg.path)   │    │
└──────────────────────────┬─────────────────────────────┘    │
                           │                                  │
          ┌────────────────┴───────────────┐                  │
          ▼                                ▼                  │
   [No Placements]                [Active Placements]         │
   Confirm Dialog                 Impact Warning Modal        │
          │                                │                  │
          └────────────────┬───────────────┘                  │
                           │ User Confirmed                   │
                           ▼                                  │
┌────────────────────────────────────────────────────────┐    │
│                  Execute Cascade Delete                │    │
│  1. Remove from library / track in deletedCatalogIds   │    │
│  2. Filter out associated records from placements[] ───┼────┘
│  3. Persist to localStorage                            │
│  4. POST payload to /api/sync-placements.json          │
│  5. Re-render Gallery, Strip, Table & Hero switcher    │
└────────────────────────────────────────────────────────┘
```

### State & Storage Management

- **`library`**: Dynamic combined array of active catalog images and custom uploads.
- **`deletedCatalogImages`**: Persisted array of IDs/paths for default catalog photos that the user has chosen to hide/remove (`STORAGE_KEY_DELETED_CATALOG = 'rs_admin_deleted_catalog'`).
- **`customImages`**: Persisted array of uploaded photos (`STORAGE_KEY_CUSTOM_IMAGES`).
- **`placements`**: Filtered placement records (`STORAGE_KEY_PLACEMENTS`), synchronized with `src/data/image-placements.json`.

### Event Handlers & Functions to Implement

1. `openDeleteImageModal(imageId)`: Inspects active placements and displays the confirmation modal.
2. `confirmDeleteImage(imageId)`: Executes deletion, placement cleanup, server sync, and UI refresh.
3. `restoreCatalogDefaults()`: Clears the deleted catalog exclusion list, restoring built-in defaults.
