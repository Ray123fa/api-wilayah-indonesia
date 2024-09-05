## API Wilayah Indonesia Pengkodean BPS
Sumber: 
- https://sipedas.pertanian.go.id/api/wilayah/index
- https://sig.bps.go.id/home/sistempengkodean

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Endpoint API
#### Return seluruh provinsi

```http
  GET /wilayah/provinsi
```

#### Return seluruh kab/kota

```http
  GET /wilayah/kabkot
```

#### Return seluruh kab/kota di suatu provinsi

```http
  GET /wilayah/kabkot/{prov_id}
```

#### Return seluruh kecamatan

```http
  GET /wilayah/kecamatan
```

#### Return seluruh kecamatan di suatu provinsi

```http
  GET /wilayah/kecamatan/{prov_id}
```

#### Return seluruh kecamatan di suatu provinsi dan kab/kota

```http
  GET /wilayah/kecamatan/{prov_id}/{kabkot_id}
```

#### Return seluruh kelurahan/desa

```http
  GET /wilayah/desa
```

#### Return seluruh desa di suatu provinsi

```http
  GET /wilayah/desa/{prov_id}
```

#### Return seluruh desa di suatu provinsi dan kab/kota

```http
  GET /wilayah/desa/{prov_id}/{kabkot_id}
```

#### Return seluruh desa di suatu provinsi, kab/kota, dan kecamatan

```http
  GET /wilayah/desa/{prov_id}/{kabkot_id}/{kec_id}
```