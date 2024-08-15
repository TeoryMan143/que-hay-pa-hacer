import AddEventForm from '@/components/add-event-form';

function AddEventPage() {
  return (
    <div>
      <h2 className='text-center text-2xl font-bold mb-4 mt-3'>
        Crea tu propio evento
      </h2>
      <div className='px-10'>
        <AddEventForm />
      </div>
    </div>
  );
}
export default AddEventPage;
