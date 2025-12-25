---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 5. Shipping

## 5.1 Overview

The **Shipment Module** is used to track all shipments sent and received by the company.

---

## 5.2 Shipment List

![Shipment List](/assets/shipping/shipment-list.png)

The Shipment List shows all shipments entered into the ERP database.

### 5.2.1 Shipment Category

There are 4 main categories of shipments

| Category | Description |
|----------|-------------|
|**Purchase**   |All PPS related purchases|
|**Intra PPS**|Shipments from one PPS location to another (i.e. LA > UK)|
|**Customer**|Completed orders shipped out to customers|
|**RMA**|Authorized return shipments|

- All **Purchase** shipments are Incoming (Vendor > PPS)  
- All **Customer** shipments are Outgoing. (PPS > Customer)

### 5.2.2 Shipment Status

As far as the ERP and PPS is concerned, there are 5 statuses for shipments.

| Status | Description |
|----------|-------------|
|**Pending**   |Scheduled shipments that haven't been shipped|
|**In Transit**|Shipments picked up by the courier and on their way|
|**Delivered**|Shipments that have been delivered by the courier (API)|
|**Received**|Shipments that have been received and checked by a PPS member|
|**Delayed**|Shipments that are stuck in clearance (API)|


#### FedEx API

For FedEx (and DHL) shipments, the ERP will fetch tracking updates from the FedEx API and each status update will be recorded in the **Log**.

However there are only 2 ERP status updates that's affected by the API status: **Delivered** and **Delayed**: 

1. If the API status is **Delivered**, the ERP status also updates.
2. If the API status notes a clearance or other delay issue, the ERP status changes to **Delayed**.

All other FedEx statuses are ignored by the ERP and the shipment stays **In Transit**.

Once the shipment has been delivered, the PPS employee that received the package will update the status after confirming delivery, opening up the shipment, and uploading images.

### 5.2.3 Location Filter

Users can filter to only show shipments either **From** or **To** each PPS location.

However, if you select both filters for the same location, the table will show both.

![Location Filter](/assets/shipping/shipment-filter-location-both.png)

For example, if the **From** and **To** filters are both set to **LA**, it shows *both shipments From AND To LA.*

---

## 5.3  Create New Shipment

![New Shipment](/assets/shipping/new-shipment.png)

When creating a new shipment you must select the **Status**, **Category**, **From**, and **To**.

### 5.3.1 New Shipment Status

![New Shipment: Status](/assets/shipping/new-shipment-status.png)

The default status is **Pending**.

The available options are:
1. Pending
2. In Transit


### 5.3.2 Shipment Category & Location

The drop-down options for **From** and **To** will change depending on the **Category**.

#### Purchase
- **From**: Vendors List
- **To**: PPS Locations - Default **User Location** (Each user has a default location: LA, VN, UK, KR)

#### Intra PPS
- **From**: PPS Locations
- **To**: PPS Locations

#### Customer

Customers and RMA shipments will later be launched from the **Project** Module



### 5.3.3 Multi Project

If the shipment is for a single project, simply search or select the project from the drop-down menu.  
If the shipment isn't specific to a project, you may also select from the other categories including **Inventory**, **Lab**...etc.

![Project Selection](/assets/shipping/project-01.png)

*The Project textbox functions both as a searchbox and a drop-down list*


If the shipment contains multiple items for different projects, enable the **Multiple Projects Option**.  
There needs to be more than 1 item added to the **Item List** for the option to be enabled.

![Project Selection](/assets/shipping/project-02.png)
![Project Selection](/assets/shipping/project-03.png)

Now users can assign **Projects** to each individual items.  

### 5.3.4 Shipment Item List

You can add items by clicking the [+] icon on the bottom right corner of the **Item List** which opens up the **Add Items** window.

![Add Items](/assets/shipping/item-list-blank.png)

![Add Items](/assets/shipping/add-items.png)

There are two different types of item you can add to a shipment.

1. **add PPS item**
    - typing in the **PN**  
    or
    - searching for the **Description**.

2. **add custom item**
    - typing in the **Description**.


### 5.3.5 Estimated Ship Date

You can enter the **Estimated Ship Date** typing in the date, or opening up the date selector by clicking the icon. 

![Shipment Date Table](/assets/shipping/shipment-date-table.png)



### 5.3.6 Shipment Photos

All outgoing and incoming shipments need to have photos uploaded. 

Depending on the category, a shipment may not contain any outgoing photos.  
For example, **Purchase** shipments usually do not require any outgoing photos.

#### Uploading Photos

The individual item rows on the [Item List](#534-shipment-item-list) are selectable.  The first row is always selected first by default.

If the item already contains uploaded photos, the camera icon shows on the item row.

![Item List](/assets/shipping/shipment-photo-01.png)

The **Photos** Tab shows the photos uploaded for the currently selected row.

You may upload photos for the selected Item by clicking the upload button. (Max? img size?)

You may delete or upload more photos as necessary.

### 5.3.7 Notifications
You can select which members or teams to notify using the checkbox menu.


## 5.4 Shipment Detail

### 5.4.1 Edit Mode

### 5.4.2 Tabs

#### 5.4.2.1 Billing

#### 5.4.2.2 Order

#### 5.4.2.3 Log

## 5.5 Linked Shipments

Shipments created from other objects in the system will pull relevant information so that the data is linked.

For example, you can create a shipment from an approved [Purchase Request](#).

You can also create a shipment from: 

- [Production Batch](#41) 
- [Project](#2-projects)
- [RMA](#2)