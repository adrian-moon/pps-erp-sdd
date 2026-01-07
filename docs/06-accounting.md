---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@site/src/components/Image';

# 6. Accounting

## 6.1 Overview

The Accounting module is closely linked with the Project module and is fully integrated with QBO API for all reporting, bookkeeping, payment processing to be done internally within the ERP.

### Quickbooks Integration

-  Accounts
-  Purchase Orders
-  Bills
-  Invoices
-  Customers
-  Vendors


---

## 6.2 Sales

### 6.2.1 Sales Process

![Shipment Detail](/assets/accounting/flow-sales.jpg)

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

### 6.2.2 Customer List

### 6.2.3 New Customer

#### Customer Qualification

---

## 6.3 Purchasing


For all purchases above a certain amount, the employee making the order must submit a purchase request for approval.

### 6.3.1 Purchase Process

![Shipment Detail](/assets/accounting/flow-purchase-process.jpg)

1. New Purchase Request is submitted
1. Purchase Request is added to the list
1. Once a Purchase Request is approved, a PO # is issued
1. Order is placed, and linked shipment is created
1. If payment is made, the PO is closed
1. If payment hasn't been made, then a Bill is created and added to QB
1. Once payment has been made, the Bill is closed
1. When the transaction is posted on QB, the Bill is matched with the transaction.


### 6.3.2 Vendors List

### 6.3.3 Purchase Requisition List

<Image 
  src="/assets/accounting/purchase-list.svg"
  alt="Purchase Requisition List"
  caption=""
/>

The Purchase Requisition List shows all entries with their current statuses.


#### Purchase Request Status

| Status | Description |
|----------|-------------|
|![Pending](/assets/accounting/status-button-pending.svg)|Purchase Requests awaiting decision|
|![Approved](/assets/accounting/status-button-approved.svg)|Purchase Requests approved by a director|
|![Rejected](/assets/accounting/status-button-rejected.svg)|Purchase Requests rejected|
|![Purchased](/assets/accounting/status-button-purchased.svg)|Approved Purchase Requests that have been ordered|

### 6.3.4 Purchase Request Form

#### New Purchase Request

When you click the [+New Purchase Request] button from the **Purchase Requisition List**, a new Purchase Request form opens up.

<Image 
  src="/assets/accounting/new-purchase-request.svg"
  alt="New Purchase Request"
  caption=""
/>

1. User must select **From** and **To**, and also add a **description**.

1. The **From** textbox is a search/dropdown from the Active **Vendors** List.

#### Adding Items

Entering items for a **Purchase Request** is the same process as the Shipment Form:
[5.3.4 Add Items to Shipment](shipping#534-add-items-to-shipment)

However for **Purchase Requests**, user _must_ enter cost of each item after they've been added to the list.

![Total Calculator](/assets/accounting/add-items-cost.svg)

Optionally, the user may also manually enter the costs for taxes, shipping, and other fees to get the total order amount.

User can also upload a pdf or image file of the Quote or estimate that is received from the vendor.

<Image 
  src="/assets/accounting/purchase-quote-upload.svg"
  alt="New Purchase Request"
  caption="Initial"
/>

<Image 
  src="/assets/accounting/purchase-quote-uploaded.svg"
  alt="New Purchase Request"
  caption="PDF file of Quotation Uploaded"
/>


### 6.3.5 Purchase Approval Process

<Image 
  src="/assets/accounting/pending-purchase.svg"
  alt="Pending Purchase"
  caption="Purchase Approval"
/>


Directors will be able to Approve or Reject the **Purchase Request** by using the [Approve] or [Reject] button.  
They may also edit the request form to change Qty or other details.

For Multiquote Purchase Request, a radio dial option appears that allows directors to select the approved option.  
The first option is selected by default. 

<Image 
  src="/assets/accounting/quote-selection.svg"
  alt="Quote Selection"
  caption="Purchase Approval (Quote Selection)"
/>

#### Approved Purchase Requests

Approved **Purchase Requests** are issued a **PO #** and a Purchase Order is created in QB.

An **Approved** Purchase Request has a [+Shipment] button which allows you to create a **Linked Shipment**.

<Image 
  src="/assets/accounting/approved-purchase.svg"
  alt="Approved Purchase"
  caption="Purchase Approval (Approved)"
/>


1. Once order is placed, if payment has been made, change PO status to **Ordered** and skip to **Step 3**.
1. If no payment has been made then, create a bill (QB).
1. After the order has been placed, user should upload the file of the receipt or order confirmation.
1. Create linked shipment.

:::info
If the order total on the PO is different from the actual order amount, user must edit the PO to match the total. 
:::


### 6.3.6 Creating a Linked Shipment

When user clicks the [+Shipment] button, a Linked Shipment form appears.

<Image 
  src="/assets/accounting/linked-shipment.svg"
  alt="Linked Shipment"
  caption="Linked Shipment Form"
/>

All of the details are copied, and there is now a field for **Courier** and **Tracking #**. 

A Linked Shipment is different from a regular shipment becuase there is an **Order** tab that pulls the corresponding data from the PO such as Vendor Order # and Order Total. 


![Total Calculator](/assets/accounting/linked-shipment-order-tab.svg)

The **Purchase Order** field also has a button that links you back to the PO.

And likewise the PO has a Linked Shipment button at the top.

<Image 
  src="/assets/accounting/purchased-purchase.svg"
  alt="Linked Shipment"
  caption="Linked PO"
/>

The user sets the **Status** accordingly:
- **In Transit** if order is shipped or will ship asap
- **Pending** if order will not ship immediately

And enters the Tracking Information if available, then submits the form by pressing the button at the top. 