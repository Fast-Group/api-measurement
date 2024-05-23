## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Notes

API call to create entry

POST https://cms.fast.com.ph/api/measurements

```
{
  "data": {
    "barcode": "YT2318522147003012",
    "machine_code": "PAXF-01",
    "weight": 1.0,
    "length": 1.0,
    "width": 1.0,
    "height": 1.0,
    "request_time": "2023-06-08 15:09:29"
  }
}
```

API call from dimensioner 

```
{
  "Barcode": [
    "ACK123456"
  ],
  "MachineCode": "NAV-01",
  "Weight": 1.2,
  "Length": 1.43,
  "Width": 2.32,
  "Height": 12.57,
  "RequestTime": "2023-06-08 15:09:29"
}
```