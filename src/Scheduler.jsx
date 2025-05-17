function Scheduler() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center' }}>📅 Book an Appointment</h2>
      <iframe
        src="https://calendly.com/miriamlpappas/30min"  // <-- Replace this
        style={{ width: '100%', height: '700px', border: 'none' }}
        title="Schedule an appointment"
        allow="fullscreen"
      />
    </div>
  );
}

export default Scheduler;
