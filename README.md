This is a self modified [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
---
Required Instals:
- Node.js
- npm

Install dependences

```bash
npm install
```

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

---
## Using the BoilerPlate
---
### example.env
---
Where you can put enviorment variables, such as private keys.
- << IMPORTANT >> <br>
Make sure to change name to `.env` and add `.env` to `.gitignore` before pushing to any repo

### /public
---
A repository for static assets that are directly accessible by the browser. This includes assets like images.
- These file are accessible from anywhere including `.css`, `.ts`, `.tsx` files.

### /src/
---
Central repository where the source code for your application, including your JavaScript, CSS, and other assets are located.

- Notes: Do not remove.

### /src/services
---
Handles interactions with external APIs or other services
- Safe to delete if you dont use any external API or other services.

### /src/types
---
The folder holds the different object types for the project. <br>
- Example import:
    - `import { Pokemon } from "@/types/pokemon";`
- Good to keep the folder, but can delete any unused `.ts` files.


### /src/app
---
App Router folder. Used for routing and application logic.
- Notes: Do not remove.


### /src/app/components
---
This folder contains different components that can be imported else were in the project.
- Example useage:
    - Place on top of page which you wish to use the component <br>
      `import { exampleTable } from "@/app/component/exampleTable";`
- Safe to delete any components not used.


### /src/app/api
---
This folder contains external API routes. It is disconnected 
- Example found in `/src/app/api/example`
- Safe to delete if not using API's.


### /src/app/context
---
Files related to managing global state using the React Context API.
- Safe to delete if not using context.

