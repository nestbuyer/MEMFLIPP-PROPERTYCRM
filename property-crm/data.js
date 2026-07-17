/* ============================================================
   PROPERTY CRM — DATA FILE
   ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR CRM.

   HOW TO ADD A NEW PROPERTY:
   Copy one of the entries below and paste it at the top of the list.
   Change the values to match your new property.
   Make sure each entry has a unique "id" — just change a few digits.

   SECTIONS:
   - "Active Inventory"  → shows in Inventory tab
   - "In Contract"       → shows in In Contract tab
   - "Sold Flips"        → shows in Sold Flips tab
   - "Assigned"          → shows in Assigned tab
   ============================================================ */

const BACKUP = [
  /* ── ACTIVE INVENTORY ─────────────────────────────────── */
  {"id":"e657c1f3-9462-42c1-bd82-a3c165da7696","section":"Active Inventory","address":"63 Old Albany Post Rd","bought":400000,"profit":990000,"status":"Renovations","source":"Auction","notes":"Renovation project"},
  {"id":"c8d9aa5c-549a-4f06-9114-bdae2b809058","section":"Active Inventory","address":"Boat Slip A-28","bought":32000,"profit":55000,"status":"Hold","source":"Other"},
  {"id":"0d7347d0-da3c-45b5-bf08-8c0b4f6e5765","section":"Active Inventory","address":"5 Gualtiere Lane Ossining NY","bought":732000,"profit":450000,"status":"Tenants","source":"Auction"},
  {"id":"946cae95-47a2-49e4-a6c3-e3f7819d1cd8","section":"Active Inventory","address":"436 Dunham Ave Mount Vernon NY","bought":351000,"profit":100000,"status":"Tenants","source":"Auction"},
  {"id":"4a872c5b-5f29-4cce-a1a5-73ccc98ef5b7","section":"Active Inventory","address":"2270 Maple Ave Cortlandt Manor NY","bought":640500,"profit":350000,"status":"Renovations","source":"Auction"},
  {"id":"a368c613-3d6a-440f-8ef9-ace9c5281af3","section":"Active Inventory","address":"95 Buena Vista Yonkers NY","bought":835000,"profit":1100000,"status":"Tenants","source":"Off Market"},
  {"id":"d57e2fa3-0e6d-41c4-9f42-80c87f427ff4","section":"Active Inventory","address":"10 S 14th Ave Mount Vernon NY","bought":450000,"profit":1100000,"status":"On the Market","source":"Auction"},
  {"id":"5633a067-3f6c-4a21-b6b4-92af1471350d","section":"Active Inventory","address":"22 Chestnut Pl Mt Vernon NY","bought":425000,"profit":200000,"status":"In Contract","source":"Off Market"},
  {"id":"d91565d6-9755-4406-94bf-2060780e7c0b","section":"Active Inventory","address":"462 S 4th Ave Mount Vernon NY","bought":175000,"profit":null,"status":"Tenants","source":"Auction","acquired":"2026-07-01"},
  {"id":"b2f47e10-3c8a-4d21-9e6f-7a05c1d83b44","section":"Active Inventory","address":"9 Wykagyl Court Carmel NY","bought":350000,"profit":null,"status":"Tenants","source":"","acquired":"2026-07-03"},

  /* ── IN CONTRACT ───────────────────────────────────────── */
  {"id":"f6f9ca13-c282-40ca-9a4a-f240f5e79615","section":"In Contract","address":"30 Hunter St Ossining NY","bought":300000,"down":30000,"closing":"2025-10-01","status":"Case","source":"Off Market"},
  {"id":"c7e9f2a1-3b4d-5e6f-8a9b-0c1d2e3f4a5b","section":"In Contract","address":"512 Warburton Ave Yonkers NY","bought":445000,"down":0,"status":"Case","source":""},

  /* ── SOLD FLIPS ────────────────────────────────────────── */
  {"id":"86f36271-1179-4ff9-82ae-c00d08c9ac66","section":"Sold Flips","address":"131 Pelhamdale Ave Mt Vernon NY","bought":538000,"soldDate":"2026-05-29","soldPrice":925000,"source":"Auction","status":"Closed"},
  {"id":"6b8ca621-b59d-4205-b423-b9400003c446","section":"Sold Flips","address":"7 Bracken Rd Ossining NY","bought":565000,"soldDate":"2026-05-07","soldPrice":760000,"source":"Off Market","status":"Closed"},
  {"id":"7fa002e2-9e54-4ce5-9402-bfc1f612655d","section":"Sold Flips","address":"35 Brook St Croton on Hudson NY","bought":375000,"soldDate":"2026-05-15","soldPrice":455000,"source":"Auction","status":"Closed"},
  {"id":"0839dafa-aa45-4b76-9639-31ac6c7333f4","section":"Sold Flips","address":"164 Highland St Port Chester NY","bought":505000,"soldDate":"2026-05-27","soldPrice":669000,"source":"Off Market","status":"Closed"},
  {"id":"ad51638e-1ba7-4809-a61e-04229603458c","section":"Sold Flips","address":"2305 Bathgate Ave Bronx NY","purchased":"2024-03-01","bought":470000,"soldDate":"2025-05-23","soldPrice":849000,"net":100000,"source":"Off Market","status":"Closed"},
  {"id":"d88efc0c-5da3-4bba-8ae0-595ab038f920","section":"Sold Flips","address":"211 N 8th Ave Mount Vernon NY","purchased":"2024-11-01","bought":405000,"soldDate":"2025-07-01","soldPrice":865000,"net":150000,"source":"Auction","status":"Closed"},
  {"id":"e0a8a212-7a91-4995-8b77-2e0ccc60fafe","section":"Sold Flips","address":"12-20 George St","purchased":"2022-09-01","bought":420000,"soldDate":"2025-07-10","soldPrice":825000,"net":0,"source":"Off Market","status":"Closed"},
  {"id":"4993b713-d051-4c3c-b843-a9eed743cb84","section":"Sold Flips","address":"10 Mohawk Yonkers NY","purchased":"2025-05-01","bought":660000,"soldDate":"2025-08-29","soldPrice":900000,"net":250000,"source":"Auction","status":"Closed"},
  {"id":"5beaf2b9-d235-48b9-a997-c33574b7fc8d","section":"Sold Flips","address":"4 West Brook Cortland Manor NY","purchased":"2025-03-01","bought":370000,"soldDate":"2025-09-03","soldPrice":590000,"net":100000,"source":"Auction","status":"Closed"},
  {"id":"747d5fae-7a4f-4ec2-9d8c-2f726ec7fcdf","section":"Sold Flips","address":"242 S 1st Ave Mount Vernon NY","purchased":"2023-02-01","bought":299000,"soldDate":"2025-09-04","soldPrice":675000,"net":87000,"source":"Auction","status":"Closed"},
  {"id":"87238073-9af3-4fdf-8b18-752875be5162","section":"Sold Flips","address":"23 Ann St Ossining NY","purchased":"2025-02-01","bought":420000,"soldDate":"2025-10-01","soldPrice":650000,"net":75000,"source":"Off Market","status":"Closed"},
  {"id":"e041817a-df25-46e8-bc73-31230d51bfe8","section":"Sold Flips","address":"10464 48th Ave Queens NY","purchased":"2025-05-01","bought":550000,"soldDate":"2025-10-10","soldPrice":881000,"net":840000,"source":"Off Market","status":"Closed"},
  {"id":"3d62bb4d-2922-4876-80cd-bad0a21491a7","section":"Sold Flips","address":"6 Stewart Pl Yonkers NY","purchased":"2025-04-01","bought":380000,"soldDate":"2025-11-18","soldPrice":595000,"net":548000,"source":"Off Market","status":"Closed"},
  {"id":"2394596b-9bfe-4997-9109-518954aafd16","section":"Sold Flips","address":"26 Old Mill Rd Yorktown Heights NY","purchased":"2025-10-01","bought":335000,"soldDate":"2026-04-09","soldPrice":405000,"net":386000,"source":"Auction","status":"Closed"},

  /* ── ASSIGNED ──────────────────────────────────────────── */
  {"id":"83bf4fff-52ea-4ea9-8221-4cae6e4f9f06","section":"Assigned","address":"665 North Division St Peekskill NY","status":"Assigned","down":18000,"received":30333},
  {"id":"f2057d4e-1c2c-41c3-ae48-f8c73476b52b","section":"Assigned","address":"24 Somerton Rd Yorktown Heights NY","purchased":"2025-08-05","soldDate":"2025-10-15","status":"Assigned","received":2000},
  {"id":"bf937089-4cf3-4210-93b3-4ef92f515e58","section":"Assigned","address":"2241 Saw Mill River Rd Yorktown Heights","purchased":"2025-07-29","soldDate":"2025-10-15","status":"Assigned","received":10000},
  {"id":"8b7f20bf-fc79-46d2-8a1b-7fb821bdd4ec","section":"Assigned","address":"40 Pine Brook Dr Larchmont NY","purchased":"2025-05-15","soldDate":"2025-11-05","status":"Assigned","received":12500},
  {"id":"9f111f5f-a398-4366-b394-afa3b54e65e1","section":"Assigned","address":"6 Timberlane Dr Katonah NY","purchased":"2025-07-18","soldDate":"2025-11-06","status":"Assigned","received":25000},
  {"id":"e30f4bb5-08e2-4afe-b05a-cd8c2b691748","section":"Assigned","address":"5 Grant Ave Peekskill NY","purchased":"2025-09-11","soldDate":"2026-02-04","status":"Assigned","down":5200,"received":2500}
];
