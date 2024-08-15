import TextFormInput from './text-form-input';

function AddEventForm() {
  return (
    <form className='flex flex-col gap-2'>
      <TextFormInput className='text-center' type='text' placeholder='Título' />
      <textarea
        className='rounded-md p-2 placeholder:text-slate-400 focus:outline-2 focus:outline-rose-500 min-h-28'
        placeholder='Descripción'
      />
      <TextFormInput type='datetime-local' />
      <TextFormInput />
    </form>
  );
}
export default AddEventForm;
