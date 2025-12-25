---
sidebar_position: 6
---
# 6. Accounting

## 6.1 Overview

## 6.2 Sales

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

## 6.3 Purchasing

### 6.3.1 Purchase Process

![Purchase Process] [flow-purchase-process]

1. New Purchase Request is submitted
1. Purchase Request is added to the list
1. Once a Purchase Request is approved, a PO # is issued
1. Order is placed, and linked shipment is created
1. If payment is made, the PO is closed
1. If payment hasn't been made, then a Bill is created and added to QB
1. Once payment has been made, the Bill is closed
1. When the transaction is posted on QB, the Bill is matched with the transaction.

### 6.3.2 Purchase Request

For all purchases above a certain amount, the employee making the order needs to submit a purchase request for approval.

##### New Purchase Request

When you click the button, the Purchase Request opens up.

![New Purchase Request] [new-purchase-request]

1. You need to select From and To, a description of the items and any notes to explain what the purchase is for.

1. You can also upload a pdf or image file of the estimate that you received from the vendor.

1. Then you need to enter all the items into the Item List just like with the [Shipment](#522-shipment-item-list)

1. Then manually enter the cost for the shipping and taxes to match the total order amount.

1. Submit the request.

#### Purchase Request List

![Purchase Request List] [purchase-list]

The Purchase Request List shows all entries with their current status

| Status | Description |
|----------|-------------|
|Pending   |Purchase Requests awaiting decision|
|Approved|Purchase Requests approved by a director|
|Rejected|Purchase Requests rejected|
|Purchased|Approved Purchase Requests that have been ordered|

#### Purchase Approval

![Purchase Approval] [purchase-approval]

Directors will be able to Approve or Reject the **Purchase Request** by using the buttons. 

Approved **Purchase Requests** are issued a **PO #** and the person who submitted the request is notified.

![Approved Purchase] [approved-purchase]

1. Once order is placed, if payment has been made, change status.
1. If no payment has been made then, create a bill.
1. After the order has been placed, upload the receipt or order confirmation.
1. Create a linked shipment

### 6.3.2 Creating a Linked Shipment