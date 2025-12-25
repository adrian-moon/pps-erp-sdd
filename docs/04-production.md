---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 4. Production

## 4.1 Overview

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


## 4.2 Production Batch List

The Production Batch List contains all batches produced by PPS.  
Each batch is assigned a unique ID that we call the Batch #.

![Production Batch List] [production-batch-list]

### 4.2.1 Status

A production batch goes through each status before it's entered into LA inventory.

| Status | Description |
|----------|-------------|
|Pending   |Before production|
|In Production|Currently under production|
|Ready to Ship|Completed production awaiting shipment|
|Shipped|Shipped out to LA|

## 4.3 Create New Batch

![Create New Batch] [new-batch]

Click the [+New Batch] button on the top right corner

Next, enter the PN for the sensor that will be produced and its quantity.

It is possible to add multiple PNs under one Production Batch.


## 4.4 Batch Detail

![Batch Detail] [batch-detail]

Once a batch has been created, you can edit it by entering the batch detail view from the Production Batch List.

### 4.4.1 Batch Status

You can update the batch status

### 4.4.2 Create Shipment

Once the batch is completed and ready to be shipped, you can create new shipment directly from the batch detail view.  

### 4.4.3 QC / Inspection

When the shipment is received by LA, an inspection must be completed.

## 4.5 Serial Number Master List

![SN Master List] [sn-master]

The SN Master List shows all produced sensors and their individual information.  

You can filter by the sensor status, location, etc.

## 4.6 Serial Number Detail

![SN Detail] [sn-detail]

Each serial number has a detail view that contains a log of its history.