# RUN

```
npm install && npm start
```

Server will start on 4000, open http://localhost:4000
```
query ExampleQuery($orderId: String, $ordersStatus: String) {
  orders(status: $ordersStatus) {
    id,
    deliveryAddress,
    items,
    total,
    discountCode,
    comment,
    status,
  }
  order(id: $orderId) {
     id,
    deliveryAddress,
    items,
    total,
    discountCode,
    comment,
    status,
  }
}

mutation UpdateStatusMutation($updateStatusId: ID, $updateStatusStatus: Status) {
  updateStatus(id: $updateStatusId, status: $updateStatusStatus) {
    id,
    status,
  }
}

```