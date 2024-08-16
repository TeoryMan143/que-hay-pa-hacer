import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const myFileRouter = {
  eventImage: f({
    image: { maxFileSize: '8MB', maxFileCount: 1 },
  }).onUploadComplete(({ file }) => {
    return file.name;
  }),
} satisfies FileRouter;

export type MyFileRouter = typeof myFileRouter;
