import { contextBridge } from 'electron'
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // fhtrytreytryet
  })
} catch (error) {
  console.error(error)
}
