# RUN

```
npm install && npm start
```

Server will start on 4000, open http://localhost:4000
```
query ExampleQuery($ID: String!, $ordersStatus: String) {
  orders(status: $ordersStatus) {
    id,
    deliveryAddress,
    items,
    total,
    discountCode,
    comment,
    status,
  }
  order(id: $ID) {
    id,
    deliveryAddress,
    items,
    total,
    discountCode,
    comment,
    status,
  }
}
```