---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@site/src/components/Image';

# 5. Shipping

## 5.1 Overview

The **Shipment Module** is used to track all shipments sent and received by the company.



### Features

- Create shipments and track [**Status**](#522-shipment-status)
- Create linked shipments from [**Purchase Requests**](./06-accounting.md#63-purchasing)
- Add multiple Inventory and Non-Inventory Items
- Assign project to each item using [**Multi Project**](#533-multi-project) Option.


---

## 5.2 Shipment List

![Shipment List](/assets/shipping/shipment-list.svg)

The Shipment List shows all shipments entered into the ERP database.

### Shipment Table Columns
|| Column | Description |
|-|--------|-------------|
|1|**Status**   |[Shipment Status](#521-shipment-status)|
|2|**Created**|Created Date|
|3|**Shipped**|Shipped Date / [Estimated Ship Date](#535-estimated-ship-date)|
|4|**From**|Shipment Departing Location|
|5|**To**|Shipment Arrival Location|
|6|**Category**|[Shipment Category](#522-shipment-category)|
|7|**Project**|Shipment Project|
|8|**Description**|General Description of Items|
|9|**Delivered**|[Delivered Date](#fedex-api)|
|10|**Received**|Received Date|
|11|**Courier**|Shipping Company|
|112|**Tracking #**|Courier Tracking Number|

### 5.2.1 Shipment Status

As far as PPS and the ERP and are concerned, there are 5 statuses for shipments.

| Status | Description |
|----------|-------------|
|![Pending](/assets/shipping/status-button-pending.svg)|Scheduled shipments that haven't been shipped|
|![In Transit](/assets/shipping/status-button-intransit.svg)|Shipments picked up by the courier and on their way|
|![Delivered](/assets/shipping/status-button-delivered.svg)|Shipments that have been delivered by the courier (API)|
|![Received](/assets/shipping/status-button-received.svg)|Shipments that have been received and checked by a PPS member|
|![Delayed](/assets/shipping/status-button-delayed.svg)|Shipments that are stuck in clearance (API)|



#### FedEx API

For FedEx (and DHL) shipments, the ERP will fetch tracking updates from the FedEx API and each status update will be recorded in the **Log**.

However there are only 2 ERP status updates that's affected by the API status: **Delivered** and **Delayed**: 

1. If the API status is **Delivered**, the ERP status also updates.
2. If the API status notes a clearance or other delay issue, the ERP status changes to **Delayed**.

All other FedEx statuses are ignored by the ERP and the shipment stays **In Transit**.

:::note

The API also fetches the tracking url from the official courier website (i.e. Fedex.com)

The Link text is bold, and clicking it opens up a new tab with the URL

![Shipment Table Row](/assets/shipping/shipment-table-row.svg)

:::

### 5.2.2 Shipment Category

There are 4 main categories of shipments

| Category | Description |
|----------|-------------|
|**Purchase**   |All PPS related purchases|
|**Intra PPS**|Shipments from one PPS location to another (i.e. LA > UK)|
|**Customer**|Completed orders shipped out to customers|
|**RMA**|Authorized return shipments|

- All **Purchase** shipments are Incoming (Vendor > PPS)  
- All **Customer** shipments are Outgoing. (PPS > Customer)







### 5.2.3 Location Filter

Users can filter to only show shipments either **From** or **To** each PPS location.

However, if you select both filters for the same location, the table will show both.

For example, if the **From** and **To** filters are both set to **LA**, it shows *both shipments From AND To LA.*

<Image 
  src="/assets/shipping/location-filter-both.svg"
  alt="Both Location Filters On"
  caption="The table shows both Shipments From LA and To LA"
/>

---

## 5.3  Create New Shipment

To create a new shipment that isn't linked, user can click the [+New Shipment] button from the **Shipment List**.

<Image 
  src="/assets/shipping/new-shipment.svg"
  alt="New Shipment"
  caption="New Shipment Form"
/>

When creating a new shipment the fields for **Status**, **Category**, **From**, and **To** are required.

:::info
The **Courier** field has 5 options; FedEX, DHL, UPS, USPS, and Other.
:::

### 5.3.1 New Shipment Status

<Image 
  src="/assets/shipping/new-shipment-status.png"
  alt="New Shipment"
  caption="New Shipment Status Options"
/>

The default status is **Pending**.

The available options are:
1. Pending
2. In Transit


### 5.3.2 Shipment Category & Location

The drop-down options for **From** and **To** will change depending on the shipment **Category**.

<Tabs>
  <TabItem value="purchase" label="Purchase" default>
    |Location|Data|    
    |--------|----|   
    |From|Vendors List|
    |To|PPS Locations|
    
    PPS Location fields automatically default to [**User Location**] setting
  </TabItem>
  <TabItem value="intra-pps" label="Intra PPS">
    |Location|Data|    
    |--------|----|   
    |From|PPS Locations|
    |To|PPS Locations|

    PPS Location fields automatically default to [**User Location**] setting
  </TabItem>
  <TabItem value="customer" label="Customer">
    Created from Project
  </TabItem>
    <TabItem value="RMA" label="RMA">
    Created from Project
  </TabItem>
</Tabs>



<!-- #### Intra PPS
- **From**: PPS Locations
- **To**: PPS Locations -->

#### Customer

Customers and RMA shipments will be created from the **Project** Module (TBD)



### 5.3.3 Shipment Project

If the shipment is for a single project, the user can simply search or select the project from the drop-down menu.

The list will be pulled from active Projects list (TBD)

If the shipment isn't specific to a project, you may also select from the other categories including **Inventory**, **Lab**...etc.

<Image
  src="/assets/shipping/project-selector.svg"
  alt="Project Selector"
  caption="Project Selection Drop-Down"
/>


:::info
The Project textbox functions both as a searchbox and a drop-down menu
:::




#### Multi Project Option
If the shipment contains multiple items for different projects, enable the **Multi Project Option**.  
If the user adds more than 1 item to the **Item List**, the Multi Project Option switch is enabled.

<Image 
  src="/assets/shipping/multi-project-switch-off.svg"
  alt="Multi Project"
  caption="Multi Project Switch is not available (1 item)"
/>

<Image 
  src="/assets/shipping/multi-project-switch-on.svg"
  alt="Multi Project"
  caption="Multi Project Switch is available (2 items)"
/>

<Image 
  src="/assets/shipping/multi-project-switch-enabled.svg"
  alt="Multi Project"
  caption="Multi Project Switch is enabled"
/>


---
When Multi Project Option is enabled, the main **Project** drop-down changes to Various.

<Image 
  src="/assets/shipping/multi-project-04.svg"
  alt="Multi Project"
  caption="Multi Project Switch is enabled"
/>

However, it displays as "Various" in this context, but the actual **Project** data should be an array of the different projects assigned to each item.



### 5.3.4 Add Items to Shipment

You can add items by clicking the [+] icon on the bottom right corner of the **Item List** which opens up the **Add Items** window.

<Image 
  src="/assets/shipping/item-list.svg"
  alt="Item List"
  caption=""
/>

<Image 
  src="/assets/shipping/add-items.svg"
  alt="Add Items"
  caption="Add Items Pop-Up"
/>

There are two different types of item you can add to a shipment.  
You can add more rows by clicking either of the buttons:

1. **PPS item**
    - typing in the **PN**  
    or
    - searching for the **Description**.


<Image 
  src="/assets/shipping/add-items-description-dropdown.svg"
  alt="Add Items"
  caption="Description Search"
/>

2. **Custom item**
    - typing in the **Description**.




### 5.3.5 Estimated Ship Date

You can enter the **Estimated Ship Date** typing in the date, or opening up the date selector by clicking the icon. 

<Image 
  src="/assets/shipping/shipment-date-table.svg"
  alt="Shipment Date Table"
  caption="Shipment Date Table"
/>

Once the Estimated Ship Date is entered, it shows in a light gray text (color-text-secondary)

<Image 
  src="/assets/shipping/shipment-date-table-2.svg"
  alt="Estimated Ship Date"
  caption="Estimated Ship Date is displayed in gray text"
/>

<Image 
  src="/assets/shipping/shipment-list-estimated-ship-date.svg"
  alt="Shipment List"
  caption="The Estiamted Ship Date is also gray on the shipment list"
/>


### 5.3.6 Shipment Photos

All outgoing and incoming shipments need to have photos uploaded.  
Depending on the category, a shipment may not contain any outgoing photos. 

For example, **Purchase** shipments usually do not require any outgoing photos.

#### Uploading Photos

When an item is added to the [Item List](#534-shipment-item-list), the Upload button for **Outgoing** photos appear.

The Item Selector card also appears in the **Photos** tab.

<Image 
  src="/assets/shipping/shipment-photo-01.svg"
  alt="No Items"
  caption="Initial"
/>

<Image 
  src="/assets/shipping/shipment-photo-02.svg"
  alt="Photo"
  caption="Photos functionality enabled"
/>

When photos are uploaded to an item, the camera icon shows on the item row to indicate which items have uploaded photos.

<Image 
  src="/assets/shipping/shipment-photo-03.svg"
  alt="Camera Icon"
  caption="Camera Icon on item row for PN 8426 shows that there are photos uploaded for that item."
/>


(Max? img size?)

#### Photo Navigation

- You can use the arrow keys on the Item Selector Card to select the item to display - in the Photos tab.  
- You can use the arrow keys on the Outgoing and Incoming photo cards to cycle throught the photos.
- You can click on the current image to view magnified version.  
- Click the upload button to upload more photos.  
- Click the trash can icon to delete currently selected photo.

### 5.3.7 Notifications
You can select which members or teams to notify using the checkbox menu.

<Image 
  src="/assets/shipping/notifications.svg"
  alt="Notification"
  caption="Notification Panel"
/>

## 5.4 Shipment Detail

Once a shipment has been submitted, its status is either: **Pending** or **In Transit**.  
The Status button appears next to the header after form submission.

![Shipment Detail](/assets/shipping/shipment-detail-heading.svg)

In either case, user can enter the **Shipment Detail** to view details and updates about the shipment.  

In order to make changes to the information, the user needs to enter **Edit Mode**. 

### 5.4.1 Edit Mode

<Image 
  src="/assets/shipping/shipment-detail.svg"
  alt="Shipment Detail"
  caption="Shipment Detail"
/>

### 5.4.1.1 Sending Shipments

If the shipment is **Pending**, the **Edit Mode** enables the Send button.

<Image 
  src="/assets/shipping/shipment-detail-pending.svg"
  alt="Pending Shipment"
  caption="Pending Shipment (Edit Mode)"
/>

Once the shipment is sent, it alerts the user and notifications are sent out to the relevant users.


### 5.4.1.2 Receiving Shipments

For FedEx and DHL shipments, the shipment status will update to **Delivered** once the API updates.

For all other shipments, the shipment status will stay as **In Transit** until it is received by user. 

<Image 
  src="/assets/shipping/shipment-detail-delivered.svg"
  alt="Delivered Shipment"
  caption="Delivered Shipment (Edit Mode)"
/>

### 5.4.2 Billing


This tab shows the shipping cost as well as the billing party for the shipment.  
The information is populated after FedEx Invoice CSV has been imported into the ERP.

<Image 
  src="/assets/shipping/shipment-tab-billing.svg"
  alt="Billing Tab"
  caption="Billing Tab"
/>

### 5.4.2.1 FedEx Invoice List

Here you can view all the FedEx Invoices that have been uploaded into the system

<Image 
  src="/assets/shipping/fedex-invoice-list.svg"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

### 5.4.2.2 FedEx Invoice Detail

Clicking on the row opens up the FedEx Invoice Detail

<Image 
  src="/assets/shipping/fedex-invoice-detail.svg"
  alt="FedEx Invoice Detail"
  caption="FedEx Invoice Detail"
/>

Here you can see all the shipments that are attached to the invoice, as well as other details like Invoice status and date.

In order to upload FedEx Invoices, you must first get the invoice data.

### 5.4.2.3 Download Invoices From FedEx.com

You can download the CSV invoice data from the FedEx website.

1. Log In at FedEx.com and Go to Billing > Invoices

<Image 
  src="/assets/shipping/fedex-invoice-01.png"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

2. Select new invoices by clicking the checkboxes
3. Click "DOWNLOAD"

<Image 
  src="/assets/shipping/fedex-invoice-02.png"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

4. Select
- File type: Csv
- Column set: All columns

5. Click "CREATE DOWNLOAD"

<Image 
  src="/assets/shipping/fedex-invoice-03.png"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

6. Go to Download Center
7. Download CSV files

<Image 
  src="/assets/shipping/fedex-invoice-04.png"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

### 5.4.2.4 Upload Invoices to ERP

Click the Upload button on the FedEx Invoices List to upload the csv file.

<Image 
  src="/assets/shipping/fedex-invoice-header.svg"
  alt="FedEx Invoice List"
  caption="FedEx Invoice List"
/>

### 5.4.2.5 FedEx Invoice CSV Format

The following column data need to be added to the corresponding shipment detail using the tracking number from **Column J**.

Each FedEx Invoice is also created and added to the list
- A FedEx invoice may contain multiple shipments
- A FedEx shipment may be added to multiple invoices

|Column|Data||    
|-|-----------------------------|-|   
|C|Invoice Date                 |Invoice Data|
|D|Invoice Number               |Invoice Data|
|F|Original Amount Due          |Invoice Data|
|G|Current Balance              |Invoice Data|
|**J**|**Express or Ground Tracking ID**|Shipment Data|
|L|Net Charge                   |Shipment Data|
|M|Service Type                 |Shipment Data|
|BY|Customs Value               |Shipment Data|




### 5.4.3 Order

Only for Linked Shipments that are created from [Purchases](accounting#64-purchasing).  

[How to Create a Linked Shipment from Purchase](accounting#632-creating-a-linked-shipment)

<Image 
  src="/assets/shipping/shipment-tab-order.svg"
  alt="Order Tab"
  caption="Order Tab"
/>

1. **Purchase Order** - Link button that takes you to the PO
1. **Vendor Order #** - Fetched from Linked Purchase
1. **Order Total** - Fetched from Linked Purchase


### 5.4.4 Log

A record log of all status updates, edits, and courier API updates.

<Image 
  src="/assets/shipping/shipment-tab-log.svg"
  alt="Log Tab"
  caption="Log Tab"
/>
