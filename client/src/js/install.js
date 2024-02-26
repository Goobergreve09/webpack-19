const butInstall = document.getElementById('buttonInstall');

// Add event handler to the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  window.deferredPrompt = event;
});

// Add click event handler on the butInstall element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return; // The deferred prompt isn't available.
  }
  // Show the install prompt
  promptEvent.prompt();
  // Wait for the user to respond to the prompt
  const choiceResult = await promptEvent.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
  // Clear the deferredPrompt variable
  window.deferredPrompt = null;
});

// Add handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});

