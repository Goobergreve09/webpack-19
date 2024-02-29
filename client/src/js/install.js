const butInstall = document.getElementById('buttonInstall');

// Add event handler to the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Stash the event so it can be triggered later
  window.deferredPrompt = event;
  butInstall.classList('hidden', false)
});

// Add click event handler on the butInstall element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return; // The deferred prompt isn't available.
  }
  // Show the install prompt
  promptEvent.prompt();

  // Clear the deferredPrompt variable
  window.deferredPrompt = null;
  butInstall.classList('hidden', true)
});

// Add handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
  window.deferredPrompt = null;
});

