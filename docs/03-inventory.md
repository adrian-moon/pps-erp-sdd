---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@site/src/components/Image';

# 3. Inventory

## 3.1 Overview
The Inventory Module is used to track sensors, modules, components, and all parts, materials, supplies related to production.  
Monitor quantities, locations, lot tracking, and stock movements.

### 3.1.1 Features
- Inventory view filter/search/sort
- Track stock by location
- Log stock movements
- Edit item detail
- Adjust stock quantities
- Set minimum stock levels and send notifications if qty drops below the threshold.
- Create filter views and custom groups

### 3.1.2 UI Map
- Inventory List
- Item Detail
- New Item

### 3.1.3 PPS PN System

Every new item that requires inventory management is assigned a unique PN and added to the Documentations List.

Currently there is one single PN for sensors, electrodes, and each sensor specification.  
All PN numbers requiring separation will have their part numbers updated by being assigned a unique suffix.

## 3.2 Inventory List

<Image 
  src="/assets/inventory/inventory-list.svg"
  alt="Inventory List"
  caption=""
/>

### 3.2.1 Search

<Image 
  src="/assets/inventory/inventory-list-header.svg"
  alt="Inventory List"
  caption=""
/>

Users may search for:

<Tabs>
    <TabItem value="pn" label="Part Number">
    When exact part number is input and user presses Enter, go to item detail view.
    - Also don’t filter out the other items when searching by number.
    - If I search 4258, It shows 4258 at the top and the rest of the numbers (4259,4260,4261…etc)
    </TabItem>

    <TabItem value="desc" label="Item Description">
    When the user needs to search for numbers in the description, the search keyword needs to be put in quotations if starting with number.
    - RES 204 searches for description
    - 8604 searches for PN
    - “8604 alternative” searches for description
    - 8604 alternative (how to disable?)
    </TabItem>
    <TabItem value="notes" label="Notes">
    
    </TabItem>
    <TabItem value="comments" label="Comments">
    
    </TabItem>
</Tabs>


### 3.2.2 Item Categories

There are a total of 8 main categories of items.  
Items under these categories will be tracked on the global inventory table.  

Group 1 Categories are items that are designed by PPS or custom manufactured.  
Group 2 Categories are mostly procured.  

There are custom manufactured items such as skins, but are not systems or electronics.

| Group 1 Category| Description |
|-----------------|-------------|
|Product   |Systems that belong to a particular product line|
|Sensors   |All other sensor units|
|PCB       |FPCB(A) and PCB(A)
|Modules   |Subsystem Modules|

| Group 2 Category | Description |
|------------------|-------------|
|Components|Electrical Components|
|Parts     |Mechanical Parts|
|Materials |Materials used in assembly|
|Supplies  |Supplies used in assembly|

#### Category Filter Dropdown

Users may use the Category Filter Dropdown to select any category and/or sub-category to show.


<Image 
  src="/assets/inventory/inventory-list-category-filter-open.svg"
  alt="Inventory List"
  caption=""
/>

1. Checking/unchecking the main category selects all sub-categories within that group
1. When multiple random selections are made, show the number of selections
1. When hovering over the drop box, the hoverbox shows all the selections in a vertical pop up

:::info

    Categories and tags are both configurable in the Administator Preferences

:::

### 3.2.3 Filter

<Image 
  src="/assets/inventory/inventory-filter.svg"
  alt="Inventory Filter"
  caption=""
/>

#### Item Status

| Status | Description |
|----------|-------------|
|Active   |Items currently used in PPS operations|
|Inactive |Obsolete or archived items|
|Low Stock|Automatically updates when qty is below the threshold (See Item Detail)|

#### Location

The location filter shows only items with at least a qty of 1+ for that location.  
It also hides unselected locations from the inventory list.

<Image 
  src="/assets/inventory/inventory-list-location-filter.svg"
  alt="Inventory Filter"
  caption="Location Filter set to LA"
/>

### 3.2.4 Tags
Tags are global groups for various categorizations and multiple tags can be assigned to a single item.  
This tag is different from Category: Product / TactileGlove)




:::note

    Why we need tags: a TactileGlove system contains many different items and accessories. TactileGlove products (the actual gloves), plus modules, accessories…etc. Each of these items are set to their own category/sub-category. But need to be grouped together under a “TactileGlove” tag.
:::


|Tags|
|----|
|Critical|
|TactileHead|
|TactileGlove|
|FingerTPS|
|SureTouch|
|PKA|
|Heeluxe|




### 3.2.5 Filter Views and Groups

There are 2 separate features

#### Filter Views
Users can select their own filter configuration and save it as a Filter View

#### Custom Groups
You can either:
Add an item with a PPS PN
	or
Create a custom item

Custom Item: Non-essential items created for a particular custom group.  
Custom items are NOT assigned a PPS PN and do not go into the Master Inventory DB

These are for local Custom Groups (i.e. VN Office Supplies)
This Custom Group (VN Office Supplies) is shared by the Vietnam team. 
They can add non-essential items as a Custom Item to simply track quantity.


### 3.2.6 Adjust Stock Quantity

When you hover over an item row, the stock adjust control buttons appear.

<Image 
  src="/assets/inventory/stock-control-01.png"
  alt="Stock Control"
  caption="Stock Control Menu appears when hovering over Item Row"
/>


There are 3 different buttons:

- **(+) add** add quantity
- **(-) remove** remove quantity
- **(=) set** set quantity (if you enter 12, the qty is set to 12)

When you click, the pop up window opens and users can set the:

- Location
- Qty
- Reason
- Notes

![Adjust Stock](/assets/inventory/stock-control-window.svg)

**Location, Quantity,** and **Reason** are required.

## 3.3 Create New Item
User can create a new item by clicking the [+Add] Button on the **Inventory List**.

<Image 
  src="/assets/inventory/new-item.svg"
  alt="New Item"
  caption=""
/>

1. The next PN in the sequence is auto populated. This is not editable along with the Rev # and Status.
2. All other fields are editable.
3. User clicks the [Save] button to complete creating the new item. 

### 3.3.1 Create New Sensor

#### Sensor Subparts

Sensor designs with different configurations are assigned the same PN, but differentiated by suffixes and will be referred to as **subparts**.

For example, for sensor design **PN3440** there are 4 different subparts all with a unique suffix:

- 3440-80
- 3440-60
- 3440-40
- 3440-NIBS

When user creates a new item and **Sensor** is selected for the Category, the checkbox options for additional Subpart configurations appears.

<Image 
  src="/assets/inventory/new-subparts.svg"
  alt="New Item"
  caption=""
/>

1. The default option has “PN” checked. This is the original PN without additional suffixes. 
2. Users can select as many options as needed.
3. All of the information filled in will be duplicated to all of the other subparts.

#### Creating additional Subparts

If you need to create additional subparts for existing PNs, you may do so in the particular PN item detail view (see below)



## 3.4 Item Detail View

<Image 
  src="/assets/inventory/item-detail.svg"
  alt="Item Detail"
  caption=""
/>

### 3.4.1 Overview

The item detail view contains all the information regarding that PN.  
By clicking the item row on the inventory list, you can enter its item detail view to see and edit the inventory item information.

:::info

    All fields are copied to clipboard when clicked (change cursor and show tooltip) except for when user enters **edit mode**

:::

### 3.4.2 Create Revision and Subparts
For Items in Category Group 1, there is an [+Add] Button that opens up a menu for either 1 or 2 options depending on the category:

![New Revision](/assets/inventory/new-revision.png)

#### 3.4.2.1 Create New Revision

When **Create New Revision** is selected, the next revision in sequence is automatically created and all data is copied over from the previous revision.

#### 3.4.2.2 Create New Subparts

Items under **Sensor** category show an additional option for **Create New Subparts**.
The same checkbox options from Create New Sensor appear.
For already existing PNs the text is greyed out and checkbox option is disabled.

### 3.4.3 Edit Mode
Users cannot edit anything unless Edit Mode is enabled by pressing the button on the top right corner. 
Once in Edit Mode, every field is editable except for the PN.

:::info
     Stock qty control/menu options and image gallery are fully editable and functional whether in Edit Mode or not.
:::

### 3.4.4 Stock Control Display

<Image 
  src="/assets/inventory/detail-stock-empty.svg"
  alt="Inventory Stock Display"
  caption=""
/>

### 3.4.4.1 Low Stock Threshold Settings

Click the menu icon to open up the settings menu

<Image 
  src="/assets/inventory/detail-stock-menu.svg"
  alt="Inventory Stock Display"
  caption=""
/>

- Configure Low Stock
    - Set threshold qty
    - Set user notifications

<Image 
  src="/assets/inventory/low-stock-window.svg"
  alt="Low Stock"
  caption=""
/>

### 3.4.4.2 Unit Size Settings

- Set Unit Size
    - The default unit size is “ea” 

<Image 
  src="/assets/inventory/unit-size.svg"
  alt="Unit Size"
  caption=""
/>

:::tip
    Click the [Show/Hide Unit] button to toggle the unit size display
:::

### 3.4.5 Item Image

Click the empty gallery window to upload image files  
(Accepted file types and max size?)

![Image Gallery](/assets/inventory/img-gallery-empty.png)

Once you upload images the **Image Gallery** will show

![Image Gallery](/assets/inventory/img-gallery-uploaded.png)

-  Click the upload icon to upload more photos
-  Click the trashcan icon to delete current photo


### 3.4.6 Item Detail Tabs
There are 6 different tabs.  
Items in Category Group 2 excludes Drive, BOM, SN tabs. 

| Tab | Description |
|----------|-------------|
|Specifications|Technical Specs / Vendor Info|
|Log|Audit log of all movements and edits made to item|
|History|Shows usage history by period and project|
|SN|Show all serial numbers for particular sensor|
|BOM| Bill of Materials |
|Drive| Google Drive Folder for files, documents, and images|

#### 3.4.6.1 Specifications

<Image 
  src="/assets/inventory/item-specifications.svg"
  alt="Item Specifications"
  caption=""
/>

The specifications tab contains a table where users can add any of number of rows, and fill it the relevant specifications.

##### Vendor Info
There are two sets of vendor information: main and alternative


:::tip
    For select vendors, you can click the Vendor PN which is linked to the vendor website URL.
:::

---

#### 3.4.6.2 Log

The log is a record of all actions performed regarding the item along with the user.
Category = Reason in Stock Control (change “Reason” to “Category” in Stock Control?)

#### 3.4.6.3 History
While the log shows all stock movements and item detail updates, the history tab will show usage history and other metrics related to projects and chronological data (i.e. how many used in 2025), for an overview or bigger picture of how it’s being used in the company’s production.

#### 3.4.6.4 SN
The sensors which are serialized will show all of their corresponding serial numbers here.

#### 3.4.6.5 BOM
Many of these items that we need to manufacture also have Bill of Materials as either a Google Sheet or an excel file within these folders. The BOMs need to be standardized and uploaded into the DB. 

This is critical for future updates to the ERP as BOMs will be used to calculate project expenses, and adjust inventory quantity based on production and projects. 


#### 3.4.6.6 Google Drive
For some critical sensors and modules, we have a Google Drive folder for each item containing important files. 
We need to reorganize the Google Drive folder structure and link them to the PN, and embed the Google Drive folder using API.

The image files in the Image Gallery should also go in this folder.