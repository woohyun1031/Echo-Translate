document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');

    // Load initial state from storage, defaults to true
    chrome.storage.local.get(['isEnabled'], (result) => {
        // If isEnabled is undefined, we assume it is true by default
        const isEnabled = result.isEnabled !== false;
        toggleSwitch.checked = isEnabled;
    });

    // Save state on change
    toggleSwitch.addEventListener('change', (e) => {
        const isEnabled = e.target.checked;
        chrome.storage.local.set({ isEnabled: isEnabled });
    });
});
