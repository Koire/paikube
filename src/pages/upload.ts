import type { APIContext } from 'astro';

// File routes export a get() function, which gets called to generate the file.
// Return an object with `body` to save the file contents in your final build.
// If you export a post() function, you can catch post requests, and respond accordingly
export async function post({ request }: APIContext) {
  const formData = await request.formData();
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
