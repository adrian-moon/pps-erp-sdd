# sdd-backup(12-24-25)

## 1. Overview

### 1.1 Purpose
The primary purpose of this software is to unify PPS's operational workflows into a single, cohesive system. It aims to eliminate redundant tools, streamline project management from quote to delivery, and develop an environment where procedures, protocol and roles are clearly defined and easy to follow through.

### 1.2 Objectives
1. Unify operations across departments into one system
1. Eliminate redundant tools while maintaining integration with external API tools.
1. Track and manage orders from quote to delivery
1. Track employee time and task progress internally
1. Monitor inventory of raw materials, components, and finished goods
1. Oversee production workflows including work orders and BOMs
1. Account for all expenses and costs of each project (components, supplies, labor, shipping)
1. Maintain databases and records of orders, shipments, inventory, projects, etc.  

---

## 2. Projects
Coming Soon

---

## 3. Inventory

### 3.1 Overview
The Inventory Module is used to track sensors, modules, components, and all parts, materials, supplies related to production. Monitor quantities, locations, lot tracking, and stock movements.

#### 3.1.1 Features
- Inventory view filter/search/sort
- Track stock by location
- Log stock movements
- Edit item detail
- Adjust stock quantities
- Set minimum stock levels and send notifications if qty drops below the threshold.
- Create filter views and custom groups

#### 3.1.2 UI Map
- Inventory List
- Item Detail
- New Item

#### 3.1.3 PPS PN System

Every new item that requires inventory management is assigned a unique PN and added to the Documentations List.

Currently there is one single PN for sensors, electrodes, and each sensor specification.  
All PN numbers requiring separation will have their part numbers updated by being assigned a unique suffix.

### 3.2 Inventory List View

![Inventory List] [inventory-list]

#### 3.2.1 Search
Users may search for:

- **Part Number:** When exact part number is input and user presses Enter, go to item detail view.
    - Also don’t filter out the other items when searching by number.
    - If I search 4258, It shows 4258 at the top and the rest of the numbers (4259,4260,4261…etc)
- **Description:** When the user needs to search for numbers in the description, the search keyword needs to be put in quotations if starting with number.
    - RES 204 searches for description
    - 8604 searches for PN
    - “8604 alternative” searches for description
    - 8604 alternative (how to disable?)
- **Notes**
- **Comments**


#### 3.2.2 Categories

There are a total of 8 main categories of items.  
Items under these categories will be tracked on the global inventory table.  

Group 1 Categories are items that are designed by PPS or custom manufactured.  
Group 2 Categories are mostly procured.  

There are custom manufactured items such as skins, but are not systems or electronics.

| Group 1 | Description |
|----------|-------------|
|Product   |Systems that belong to a particular product line|
|Sensors   |All other sensor units|
|PCB       |FPCB(A) and PCB(A)
|Modules   |Subsystem Modules|

| Group 2 | Description |
|----------|-------------|
|Components|Electrical Components|
|Parts     |Mechanical Parts|
|Materials |Materials used in assembly|
|Supplies  |Supplies used in assembly|

##### 3.2.2.1 Category Filter Dropdown

Users may use the Category Filter Dropdown to select any category and/or sub-category to show.


![Category Filter] [category-filter]  

1. Checking/unchecking the main category selects all sub-categories within that group
1. When multiple random selections are made, show the number of selections
1. When hovering over the drop box, the hoverbox will show all the selections in a vertical pop up

#### 3.2.3 Filter
![Inventory Filter] [inventory-filter]

##### 3.2.3.1 Status Filter

| Status | Description |
|----------|-------------|
|Active   |Items currently used in PPS operations|
|Inactive |Obsolete or archived items|
|Low Stock|Automatically updates when qty is below the threshold (See Item Detail)|

##### 3.2.3.2 Location Filter

The location filter shows only items with at least a qty of 1+ for that location.  
It also hides unselected locations from the inventory list.

#### 3.2.4 Tags
Tags are global groups for various categorizations and multiple tags can be assigned to a single item.  
This tag is different from Category: Product / TactileGlove)


!!! abstract "Administrator"

    Categories and tags are both configurable in the Administator Preferences

!!! note

    Why we need tags: a TactileGlove system contains many different items and accessories. TactileGlove products (the actual gloves), plus modules, accessories…etc. Each of these items are set to their own category/sub-category. But need to be grouped together under a “TactileGlove” tag.  


|Tags|
|----|
|Critical|
|TactileHead|
|TactileGlove|
|FingerTPS|
|SureTouch|
|PKA|
|Heeluxe|




#### 3.2.5 Filter Views and Groups (PHASE 2)
![Filter Views and Groups] [filter-views-groups]

There are 2 separate features

##### 3.2.5.1 Filter Views
Users can select their own filter configuration and save it as a Filter View

##### 3.2.5.2 Custom Groups
You can either:
Add an item with a PPS PN
	or
Create a custom item

Custom Item: Non-essential items created for a particular custom group.  
Custom items are NOT assigned a PPS PN and do not go into the Master Inventory DB

These are for local Custom Groups (i.e. VN Office Supplies)
This Custom Group (VN Office Supplies) is shared by the Vietnam team. 
They can add non-essential items as a Custom Item to simply track quantity.


#### 3.2.6 Stock Control
When you hover over the item row, the stock control buttons appear.

![Stock Control] [stock-control-01]

There are 3 different buttons:

- **(+) add** add quantity
- **(-) remove** remove quantity
- **(=) set** set quantity (if you enter 12, the qty is set to 12)

When you click, the pop up window opens and users can set the:

- Location
- Qty
- Reason
- Notes

![Adjust Stock] [stock-control-02]

### 3.3 Create New Item
User can create a new item by clicking the [+Add] Button on the table view or on the side menu.

![New Item] [new-item]

1. The next PN in the sequence is auto populated. This is not editable along with the Rev # and Status.
2. All other fields are editable.
3. User clicks the [Save] button to complete creating the new item. 

#### 3.3.1 Create New Sensor

##### Sensor Subparts

Sensor designs with different configurations are assigned the same PN, but differentiated by suffixes and will be referred to as **subparts**.

For example, for sensor design **PN3440** there are 4 different subparts all with a unique suffix:

- 3440-80
- 3440-60
- 3440-40
- 3440-NIBS

When user creates a new item and **Sensor** is selected for the Category, the checkbox options for additional Subpart configurations appears.

![New Sensor] [new-sensor]

1. The default option has “PN” checked. This is the original PN without additional suffixes. 
2. Users can select as many options as needed.
3. All of the information filled in will be duplicated to all of the other subparts.

##### Creating additional Subparts

If you need to create additional subparts for existing PNs, you may do so in the particular PN item detail view (see below)



### 3.4 Item Detail View

![Item Detail View] [item-detail]

#### 3.4.1 Overview

The item detail view contains all the information regarding that PN.  
By clicking the item row on the inventory list, you can enter its item detail view to see and edit the inventory item information.

!!! info

    All fields are copied to clipboard when clicked (change cursor and show tooltip) except for when user enters **edit mode**

#### 3.4.2 Create Revision and Subparts
For Items in Category Group 1, there is an [+Add] Button that opens up a menu for either 1 or 2 options depending on the category:

![New Revision] [new-revision]

##### 3.4.2.1 Create New Revision

When **Create New Revision** is selected, the next revision in sequence is automatically created and all data is copied over from the previous revision.

##### 3.4.2.2 Create New Subparts

Items under **Sensor** category show an additional option for **Create New Subparts**.
The same checkbox options from Create New Sensor appear.
For already existing PNs the text is greyed out and checkbox option is disabled.

#### 3.4.3 Edit Mode
Users cannot edit anything unless Edit Mode is enabled by pressing the button on the top right corner. 
Once in Edit Mode, every field is editable except for the PN.

!!! info

     Stock qty control/menu options and image gallery are fully editable and functional whether in Edit Mode or not.

#### 3.4.4 Stock Control Menu

![Stock Menu] [stock-menu-detail]

The menu has 2 options:

- Configure Low Stock
    - Set threshold qty
    - Configure notification settings (phase 2)

![Low Stock] [low-stock]


- Set Unit Size
    - The default unit size is “ea” 

![Unit Size] [unit-size]

!!! tip

    Click the [Show/Hide Unit] button to toggle the unit size display

#### 3.4.5 Image Gallery

Click the empty gallery window to upload image files  
(Accepted file types and max size?)

![Image Gallery] [img-gallery-empty]

Once you upload images the **Image Gallery** will show

![Image Gallery] [img-gallery-uploaded]

-  Click the upload icon to upload more photos
-  Click the trashcan icon to delete current photo


#### 3.4.6 Item Detail Tabs
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

##### 3.4.6.1 Specifications

![Specifications] [specifications]

The specifications tab contains a table where users can add any of number of rows, and fill it the relevant specifications.

###### Vendor Info
There are two sets of vendor information: main and alternative


!!! tip

    For select vendors, you can click the Vendor PN which is linked to the vendor website URL.

---
**Phase 2**

##### 3.4.6.2 Log

![Log] [log]

The log is a record of all actions performed regarding the item along with the user.
Category = Reason in Stock Control (change “Reason” to “Category” in Stock Control?)

##### 3.4.6.3 History
While the log shows all stock movements and item detail updates, the history tab will show usage history and other metrics related to projects and chronological data (i.e. how many used in 2025), for an overview or bigger picture of how it’s being used in the company’s production.

##### 3.4.6.4 SN
The sensors which are serialized will show all of their corresponding serial numbers here.

##### 3.4.6.5 BOM
Many of these items that we need to manufacture also have Bill of Materials as either a Google Sheet or an excel file within these folders. The BOMs need to be standardized and uploaded into the DB. 

This is critical for future updates to the ERP as BOMs will be used to calculate project expenses, and adjust inventory quantity based on production and projects. 


##### 3.4.6.6 Google Drive
For some critical sensors and modules, we have a Google Drive folder for each item containing important files. 
We need to reorganize the Google Drive folder structure and link them to the PN, and embed the Google Drive folder using API.

The image files in the Image Gallery should also go in this folder.

---

## 4. Production

### 4.1 Overview

All manufactured sensor units are serialized. 

Sensors in the following categories are manufactured by PPS VN:

| Category |
|----------|
|CTA/CHTA/ITA/HTA|
|TactileGlove|
|FingerTPS|
|SureTouch|

Sensors in the following categories are manufactured by PPS KR:

| Category |
|----------|
|PKA|
|SingleTact|


### 4.2 Production Batch List

The Production Batch List contains all batches produced by PPS.  
Each batch is assigned a unique ID that we call the Batch #.

![Production Batch List] [production-batch-list]

#### 4.2.1 Status

A production batch goes through each status before it's entered into LA inventory.

| Status | Description |
|----------|-------------|
|Pending   |Before production|
|In Production|Currently under production|
|Ready to Ship|Completed production awaiting shipment|
|Shipped|Shipped out to LA|

### 4.3 Create New Batch

![Create New Batch] [new-batch]

Click the [+New Batch] button on the top right corner

Next, enter the PN for the sensor that will be produced and its quantity.

It is possible to add multiple PNs under one Production Batch.


### 4.4 Batch Detail

![Batch Detail] [batch-detail]

Once a batch has been created, you can edit it by entering the batch detail view from the Production Batch List.

#### 4.4.1 Batch Status

You can update the batch status

#### 4.4.2 Create Shipment

Once the batch is completed and ready to be shipped, you can create new shipment directly from the batch detail view.  

#### 4.4.3 QC / Inspection

When the shipment is received by LA, an inspection must be completed.

### 4.5 Serial Number Master List

![SN Master List] [sn-master]

The SN Master List shows all produced sensors and their individual information.  

You can filter by the sensor status, location, etc.

### 4.6 Serial Number Detail

![SN Detail] [sn-detail]

Each serial number has a detail view that contains a log of its history.

---

## 5. Shipment

### 5.1 Overview

The **Shipment Module** is used to track all shipments sent and received by the company.

### 5.2 Shipment List

![Shipment List] [shipment-list]

The Shipment List shows all shipments entered into the ERP database.

#### 5.2.1 Shipment Category

There are 4 main categories of shipments

| Category | Description |
|----------|-------------|
|Purchase   |All PPS related purchases|
|Intra PPS|Shipments from one PPS location to another (i.e. LA > UK)|
|Customer|Completed orders shipped out to customers|
|RMA|Authorized return shipments|

- All **Purchase** shipments are Incoming (Vendor > PPS)  
- All **Customer** shipments are Outgoing. (PPS > Customer)

#### 5.2.2 Shipment Status

As far as the ERP and PPS is concerned, there are 5 statuses for shipments.

| Status | Description |
|----------|-------------|
|Pending   |Scheduled shipments that haven't been shipped|
|In Transit|Shipments picked up by the courier and on their way|
|Delivered|Shipments that have been delivered by the courier (API)|
|Received|Shipments that have been received and checked by a PPS member|
|Delayed|Shipments that are stuck in clearance (API)|

When a shipment is created, the status should be set to either **Pending** or **In Transit** if it has been shipped out. 

##### FedEx API

For FedEx shipments, the ERP will get tracking updates from the FedEx API and each status update will be recorded in the **Log**.

However there are only 2 ERP status updates that's automated by the API status: **Delivered** and **Delayed**. 

1. If the API status is **Delivered**, the ERP status also updates.
2. If the API status notes a clearance or other delay issue, the ERP status changes to **Delayed**.

All other FedEx statuses are ignored by the ERP and the shipment stays **In Transit**.

Once the shipment has been delivered, the PPS employee that **received** the package will update the status after confirming delivery, opening up the shipment, and uploading images.

#### 5.2.3 Location Filter

You can filter to only show shipments either **From** or **To** each PPS location.

If you select both filters for the same location, the table will show both.
For example, if the **From** filter and **To** filter are both set to **LA**, then the table shows both shipments coming to LA and sent out from LA. 

![Location Filter] [shipment-filter-location-both]

### 5.2  Create New Shipment

![New Shipment] [new-shipment]

When creating a new shipment you must select the **Status**, **Category**, **From**, and **To**.

You can also input the Courier and Tracking # if available.

#### 5.2.1 Project

1. If the shipment is for a single project, simply search or select the project from the drop-down menu. 

![Project Selection][project-01]

*If the shipment isn't specific to a project, you may also select from the other categories: Inventory, Lab*

2. If the shipment contains multiple items for different projects, switch on the Multiple Projects option.

*There needs to be more than 1 item added to the **Item List** for the option to be enabled.*

![Project Selection][project-02]
![Project Selection][project-03]

3. Now you can assign **Projects** to each individual items as explained below.

#### 5.2.2 Shipment Item List

You can add items by clicking the [+] icon on the bottom right corner which opens up the **Add Items** window.

![Add Items][add-items]

1. You can **add PPS item** by
    - typing in the **PN**
    or
    - searching for the **Description**.

2. You can **add custom item** by typing in the **Description**.

- Create local item
Local items are only relevant for the particular shipment, are not saved for future use.

#### 5.2.3 Estimated Shipped Date & Estimated Delivery Date

You can enter the Estimated Shipped Date and Estimated Delivery Date by clicking the button in the Shipment Date Table. 

![Shipment Date Table][shipment-date-table]

#### 5.2.4 Shipment Photos

All outgoing and incoming shipments need to have photos uploaded. 

Depending on the category, a shipment may not contain any photos.
For example, incoming purchases typically do not require a photo, although they can be uploaded if necessary.

The following categories require photos to be uploaded:

- **Intra PPS** Shipments
- Outgoing **Customer** Shipments
- Outgoing **RMA** Shipments

*Have customers take and upload photos for Incoming Customer and RMA Shipments?*

##### Uploading Photos

The individual item rows on the [Item List](#522-shipment-item-list) are selectable.  The first row is always selected first by default.

If the item already contains uploaded photos, the camera icon shows on the item row.

![Item List][shipment-photo-01]

The **Photos** Tab shows the photos uploaded for the currently selected row.

You may upload photos for the selected Item by clicking the upload button. (Max? img size?)

You may delete or upload more photos as necessary.

#### 5.2.4 Notifications
You can select which members or teams to notify using the checkbox menu.


### 5.3 Shipment Detail

#### 5.3.1 Edit Mode

#### 5.3.2 Tabs

##### 5.3.2.1 Billing

##### 5.3.2.2 Order

##### 5.3.2.3 Log

### 5.4 Linked Shipments

Shipments created from other objects in the system will pull relevant information so that the data is linked.

For example, you can create a shipment from an approved [Purchase Request](#).

You can also create a shipment from: 

- [Production Batch](#41) 
- [Project](#2-projects)
- [RMA](#2)

## 6. Accounting

### 6.1 Overview

### 6.2 Sales

![Sales Process] [flow-sales]

1. New Customer inquiry received
1. Customer Qualification
1. Approved Customers are added to the **Customer List**
1. Project Estimate is created and sent to customer
1. Customer PO received
1. Project and Invoice is created
1. Project is delivered
1. Invoice is sent to customer
1. Payment is received
1. Invoice is closed

### 6.3 Purchasing

#### 6.3.1 Purchase Process

![Purchase Process] [flow-purchase-process]

1. New Purchase Request is submitted
1. Purchase Request is added to the list
1. Once a Purchase Request is approved, a PO # is issued
1. Order is placed, and linked shipment is created
1. If payment is made, the PO is closed
1. If payment hasn't been made, then a Bill is created and added to QB
1. Once payment has been made, the Bill is closed
1. When the transaction is posted on QB, the Bill is matched with the transaction.

#### 6.3.2 Purchase Request

For all purchases above a certain amount, the employee making the order needs to submit a purchase request for approval.

###### New Purchase Request

When you click the button, the Purchase Request opens up.

![New Purchase Request] [new-purchase-request]

1. You need to select From and To, a description of the items and any notes to explain what the purchase is for.

1. You can also upload a pdf or image file of the estimate that you received from the vendor.

1. Then you need to enter all the items into the Item List just like with the [Shipment](#522-shipment-item-list)

1. Then manually enter the cost for the shipping and taxes to match the total order amount.

1. Submit the request.

##### Purchase Request List

![Purchase Request List] [purchase-list]

The Purchase Request List shows all entries with their current status

| Status | Description |
|----------|-------------|
|Pending   |Purchase Requests awaiting decision|
|Approved|Purchase Requests approved by a director|
|Rejected|Purchase Requests rejected|
|Purchased|Approved Purchase Requests that have been ordered|

##### Purchase Approval

![Purchase Approval] [purchase-approval]

Directors will be able to Approve or Reject the **Purchase Request** by using the buttons. 

Approved **Purchase Requests** are issued a **PO #** and the person who submitted the request is notified.

![Approved Purchase] [approved-purchase]

1. Once order is placed, if payment has been made, change status.
1. If no payment has been made then, create a bill.
1. After the order has been placed, upload the receipt or order confirmation.
1. Create a linked shipment

#### 6.3.2 Creating a Linked Shipment

---


