Allow to use parcel to run Node scripts just like it runs HTML/JS/CSS files in the browser

## How to use

In `.parcelrc`:

```json
{
  "reporters": ["parcel-reporter-node-runner"]
}
```

⚠️ For now it doesn't support HMR
