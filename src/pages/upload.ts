import type { APIContext } from 'astro';
import fs from 'node:fs/promises'

// File routes export a get() function, which gets called to generate the file.
// Return an object with `body` to save the file contents in your final build.
// If you export a post() function, you can catch post requests, and respond accordingly
export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const data = <File>formData.getAll('files')[0]
  fs.writeFile(data.name, data.stream())
  return {
    body: JSON.stringify({
      fileNames: await Promise.all(
        formData.getAll('files').map(async (file: File) => {
          return {
            webkitRelativePath: file.webkitRelativePath,
            lastModified: file.lastModified,
            name: file.name,
            size: file.size,
            type: file.type,
            buffer: {
              type: 'Buffer',
              value: Array.from(
                new Int8Array(await file.arrayBuffer()).values()
              ),
            },
          };
        })
      ),
    }),
  };
}
