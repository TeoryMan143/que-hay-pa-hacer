'use client';

import { useCallback, useState } from 'react';
import SearchAddress from './search-address';
import TextFormInput from './text-form-input';
import { UploadButton } from './upload-image-button';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formEventSchema } from '@/core/schemas';
import type { FormEvent } from '@/core/types';
import { toast } from 'sonner';
import { addEvent } from '@/core/lib/events';

function AddEventForm() {
  const { register, handleSubmit } = useForm<FormEvent>({
    resolver: zodResolver(formEventSchema),
  });

  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [imageId, setImageId] = useState<string | null>(null);

  const handleLocationChange = useCallback(
    (loc: { lat: number; lng: number }) => {
      setLocation(loc);
    },
    [],
  );

  const onSubmit: SubmitHandler<FormEvent> = async data => {
    const toastId = toast.loading('Subiendo evento...');

    if (!location) {
      return toast.error('Elige una ubicación', {
        id: toastId,
      });
    }

    if (!imageId) {
      return toast.error('Elige una imagen', {
        id: toastId,
      });
    }

    const res = await addEvent({ ...data, latlng: location, image: imageId });

    if (res instanceof Error) {
      return toast.error('Ha ocurrido un error', {
        id: toastId,
      });
    }

    toast.success('Creado correctamente', { id: toastId });
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
      <TextFormInput
        className='text-center'
        type='text'
        placeholder='Título'
        {...register('title')}
      />
      <textarea
        className='rounded-md p-2 placeholder:text-slate-400 focus:outline-2 focus:outline-rose-500 min-h-28'
        placeholder='Descripción'
        {...register('description')}
      />
      <SearchAddress onLocationChange={handleLocationChange} />
      <TextFormInput
        type='datetime-local'
        {...register('date', { valueAsDate: true })}
      />
      <UploadButton
        endpoint='eventImage'
        content={{ button: 'Elige una imagen', allowedContent: 'Imagen (8MB)' }}
        appearance={{
          button: 'bg-rose-500',
        }}
        onClientUploadComplete={files => {
          setImageId(files[0].key);
        }}
      />
      <div className='flex justify-center mt-3'>
        <button className='p-2 px-3 text-rose-500 bg-white rounded-md'>
          Crear
        </button>
      </div>
    </form>
  );
}
export default AddEventForm;
