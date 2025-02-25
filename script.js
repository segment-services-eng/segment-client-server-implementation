// Add near the top with other variable declarations
const adminUsers = [
    {
        userId: "admin_01234",
        firstName: "Sarah",
        lastName: "Anderson",
        adminEmail: "sarah-anderson@admin.com"
    },
    {
        userId: "admin_56789",
        firstName: "Michael",
        lastName: "Chen",
        adminEmail: "michael.chen@admin.com"
    },
    {
        userId: "admin_abcde",
        firstName: "Jessica",
        lastName: "Taylor",
        adminEmail: "jessica-taylor@admin.com"
    },
    {
        userId: "admin_fghij",
        firstName: "David",
        lastName: "Rodriguez",
        adminEmail: "david_rodriguez@admin.com"
    },
    {
        userId: "admin_klmno",
        firstName: "Emma",
        lastName: "Phillips",
        adminEmail: "emma.phillips@admin.com"
    }
];

let currentAdminUser = adminUsers[Math.floor(Math.random() * adminUsers.length)];
// Update the adminState object to include more details
let adminState = {
    isEnabled: false,
    currentAdmin: null,
    originalContext: null,
    originalUserId: null,
    originalAnonymousId: null,
    originalTraits: null
};



// async function handleAdminToggle(event) {
//     adminState.isEnabled = event.target.checked;
    
//     if (adminState.isEnabled) {
//         try {
//             // Get current client data before reset
//             const clientData = await getClientData();
            
//             // Store original state
//             adminState.currentAdmin = currentAdminUser;
//             adminState.originalContext = clientData.context;
//             adminState.originalUserId = clientData.clientUserId;
//             adminState.originalAnonymousId = clientData.clientAnonymousId;
//             adminState.originalTraits = clientData.traits;

//             console.log('Admin mode activated:', adminState.currentAdmin);
            
//             // Disable client-side event buttons
//             document.querySelectorAll('.client-side-events button').forEach(btn => {
//                 btn.disabled = true;
//                 btn.style.opacity = '0.5';
//                 btn.style.cursor = 'not-allowed';
//             });
//             // update client-side card to appear disabled
//             // document.getElementsByClassName('client-side-events').style.backgroundColor = `#eee`;
//             document.getElementById('client-side-events').classList.add('not-allowed');

//             document.getElementById('admin-label').style.color = '#dc3545'; // Explicitly set color
//             document.getElementById('admin-label').classList.remove('hidden');
            
//             // #admin-toggle .enabled
//             document.getElementById('admin-toggle').classList.add('enabled');
            
//             document.getElementById('admin-user-info').classList.remove('hidden');
//             document.getElementById('admin-userId-span').innerText = `${currentAdminUser.userId}`;
//             document.getElementById('admin-email-span').innerText = `${currentAdminUser.adminEmail}`;
//             document.getElementById('admin-firstName-span').innerText = `${currentAdminUser.firstName}`;
//             document.getElementById('admin-lastName-span').innerText = `${currentAdminUser.lastName}`;
            


//             // Change instructions
//             document.querySelector('.instructions').innerHTML = `
//             <p><strong>ADMIN MODE ACTIVE</strong></p>
//             <p>1. You are now impersonating a user as an admin.</p>
//             <p>2. Click the Generate User Data button to create a user to impersonate.</p>
//             <p>3. Only Server-Side events are enabled for admin users.</p>
//             <p>4. All server events will include your admin information sent in the event's context.admin object.</p>
//             <p>5. Click any button under Server Event Triggers to have that event triggered on the server.</p>
//             <p>6. Review the event requests under Server Side Segment Requests, click on them to reveal the payload.</p>
//         `;

//             // Reset user data last to avoid page reload issues
//             cookieReset();
            
//             console.log(`Logged in as Admin: ${currentAdminUser.firstName} ${currentAdminUser.lastName}`);
//         } catch (error) {
//             console.error('Error activating admin mode:', error);
//             event.target.checked = false;
//             adminState.isEnabled = false;
//         }
//     } else {
//         // Enable client-side event buttons
//         document.querySelectorAll('.client-side-events button').forEach(btn => {
//             btn.disabled = false;
//             btn.style.opacity = '1';
//             btn.style.cursor = 'pointer';
//         });
//         document.getElementById('client-side-events').classList.remove('not-allowed');

//         // Clear admin state
//         adminState.currentAdmin = null;
//         adminState.originalContext = null;
//         adminState.originalUserId = null;
//         adminState.originalAnonymousId = null;
//         adminState.originalTraits = null;

//         document.getElementById('admin-user-info').classList.add('hidden');
//         document.getElementById('admin-userId-span').innerText = ``;
//         document.getElementById('admin-email-span').innerText = ``;
//         document.getElementById('admin-firstName-span').innerText = ``;
//         document.getElementById('admin-lastName-span').innerText = ``;

        
//          // Restore original instructions
//         document.querySelector('.instructions').innerHTML = `
//             <p>1. Click the Generate User Data button to create user traits and a userId.</p>
//             <p>2. Click any button under Client Event Triggers to have that event triggered on the client.</p>
//             <p>3. Click any button under Server Event Triggers to have that event triggered on the server.</p>
//             <p>4. Review the event requests under Segment Requests, click on them to reveal the payload.</p>
//             <p>5. You can also manually complete the User Form with customized data. The Submit button triggers an Identify event and a Track event 'Form Submitted' with the form's data.</p>
//         `;
        
//         // Hide admin info
//         document.getElementById('admin-label').style.color = '#6b7280'; // Reset color
//         document.getElementById('admin-user-info').classList.add('hidden');
        
//         // Enable client-side event buttons
//         document.querySelectorAll('.client-side-events button').forEach(btn => {
//             btn.disabled = false;
//             btn.style.opacity = '1';
//             btn.style.cursor = 'pointer';
//         });

//         // Reset cookies to clear any admin state
//         cookieReset();
//         window.location.reload();
//     }
// }


// UPDATES COOKIE ON CLICK OR NEW VALUE
// const cookieClick = (cookieType, cookieValue) => {
//     cookieType === 'userId' ? document.getElementById('userId').innerText = `userId : ${JSON.stringify(cookieValue)}` : ''


//     cookieType === 'anonymousId' ? document.getElementById('anonymousId').innerText = `anonymousId : ${JSON.stringify(cookieValue)}` : ''
    
    
//     cookieType === 'userTraits' ? document.getElementById('userTraits').innerText = `traits : ${JSON.stringify(cookieValue)}` : ''
    
// }


// // RESETS ALL COOKIES AND RELOADS THE PAGE
// const cookieReset = async () => {
//     try {
//         // Get the current anonymousId before reset
//         const currentAnonymousId = analytics.user().anonymousId();

//         // Reset client-side analytics
//         analytics.reset();

//         // Clear UI elements
//         document.getElementById('userId').innerText = 'userId : ';
//         document.getElementById('anonymousId').innerText = 'anonymousId : ';
//         document.getElementById('userTraits').innerText = 'userTraits : ';

//         // Clear local variables
//         userId = '';
//         anonymousId = '';
//         userTraits = {};
//         firstName = '';
//         lastName = '';
//         username = '';
//         phone = '';
//         street = '';
//         city = '';
//         state = '';
//         zipcode = '';
//         email = '';

//         // Call server reset endpoint
//         const response = await fetch('http://localhost:4100/api/reset', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 anonymousId: currentAnonymousId
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`Server reset failed: ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log('Server reset result:', result);

//         // Clear any local storage items if they currently have values
//         localStorage.removeItem('userId');
//         localStorage.removeItem('anonymousId');
//         localStorage.removeItem('groupId');
//         localStorage.removeItem('userTraits');
//         localStorage.removeItem('groupTraits');

//         // Optional: Clear all segment-related local storage items
//         Object.keys(localStorage).forEach(key => {
//             if (key.startsWith('ajs_') || key.startsWith('seg_')) {
//                 localStorage.removeItem(key);
//             }
//         });

//         // Reload the page to simulate a new session
//            // Only reload if not in admin mode
//         if (!adminState.isEnabled) {
//             window.location.reload();
//         } else {
//             // For admin mode, just clear the displayed user data
//             document.getElementById('firstName-span').innerHTML = '';
//             document.getElementById('lastName-span').innerHTML = '';
//             document.getElementById('username-span').innerHTML = '';
//             document.getElementById('phone-span').innerHTML = '';
//             document.getElementById('email-span').innerHTML = '';
//             document.getElementById('street-span').innerHTML = '';
//             document.getElementById('city-span').innerHTML = '';
//             document.getElementById('state-span').innerHTML = '';
//             document.getElementById('zipcode-span').innerHTML = '';
//         }
//     } catch (error) {
//         console.error('Error during reset:', error);
//         // You might want to show this error to the user
//         alert('Error during reset. Check console for details.');
//     }
// };

// Centralized function to update UI based on admin state
function updateAdminUI(isAdminMode) {
    // Get the actual checkbox element (not the container)
    const adminCheckbox = document.querySelector('.admin-input');
    
    // Set the checkbox state programmatically to match admin state
    if (adminCheckbox) {
        adminCheckbox.checked = isAdminMode;
    }

    const clientEventButtons = document.querySelectorAll('.client-side-events button');
    const clientEventsContainer = document.getElementById('client-side-events');
    const adminLabel = document.getElementById('admin-label');
    const adminToggle = document.getElementById('admin-toggle');
    const adminUserInfo = document.getElementById('admin-user-info');
    const instructionsElement = document.querySelector('.instructions');

    if (isAdminMode) {
        // Disable client-side event buttons
        clientEventButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        });
        clientEventsContainer.classList.add('not-allowed');

        // Update admin label
        adminLabel.style.color = '#dc3545';
        adminLabel.classList.remove('hidden');

        // Update admin toggle
        adminToggle.classList.add('enabled');

        // Show admin user info
        adminUserInfo.classList.remove('hidden');
        
        // Update admin user details
        document.getElementById('admin-userId-span').innerText = `${currentAdminUser.userId}`;
        document.getElementById('admin-email-span').innerText = `${currentAdminUser.adminEmail}`;
        document.getElementById('admin-firstName-span').innerText = `${currentAdminUser.firstName}`;
        document.getElementById('admin-lastName-span').innerText = `${currentAdminUser.lastName}`;

        // Update instructions
        instructionsElement.innerHTML = `
            <p><strong>ADMIN MODE ACTIVE</strong></p>
            <p>1. You are now impersonating a user as an admin.</p>
            <p>2. Click the Generate User Data button to create a user to impersonate.</p>
            <p>3. Only Server-Side events are enabled for admin users.</p>
            <p>4. All server events will include your admin information sent in the event's context.admin object.</p>
            <p>5. Click any button under Server Event Triggers to have that event triggered on the server.</p>
            <p>6. Review the event requests under Server Side Segment Requests, click on them to reveal the payload.</p>
        `;
    } else {
        // Enable client-side event buttons
        clientEventButtons.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        });
        clientEventsContainer.classList.remove('not-allowed');

        // Reset admin label
        adminLabel.style.color = '#6b7280';
        adminToggle.classList.remove('enabled');

        // Hide admin user info
        adminUserInfo.classList.add('hidden');
        
        // Clear admin user details
        document.getElementById('admin-userId-span').innerText = '';
        document.getElementById('admin-email-span').innerText = '';
        document.getElementById('admin-firstName-span').innerText = '';
        document.getElementById('admin-lastName-span').innerText = '';

        // Restore original instructions
        instructionsElement.innerHTML = `
            <p>1. Click the Generate User Data button to create user traits and a userId.</p>
            <p>2. Click any button under Client Event Triggers to have that event triggered on the client.</p>
            <p>3. Click any button under Server Event Triggers to have that event triggered on the server.</p>
            <p>4. Review the event requests under Segment Requests, click on them to reveal the payload.</p>
            <p>5. You can also manually complete the User Form with customized data. The Submit button triggers an Identify event and a Track event 'Form Submitted' with the form's data.</p>
        `;
    }
}

// Centralized function to clear user data
function clearUserData() {
    // Clear UI elements
    document.getElementById('userId').innerText = 'userId : ';
    document.getElementById('anonymousId').innerText = 'anonymousId : ';
    document.getElementById('userTraits').innerText = 'userTraits : ';

    // Clear local variables
    userId = '';
    anonymousId = '';
    userTraits = {};
    firstName = '';
    lastName = '';
    username = '';
    phone = '';
    street = '';
    city = '';
    state = '';
    zipcode = '';
    email = '';

    // Clear user-related spans
    const userDetailSpans = [
        'firstName-span', 'lastName-span', 'username-span', 
        'phone-span', 'email-span', 'street-span', 
        'city-span', 'state-span', 'zipcode-span'
    ];
    userDetailSpans.forEach(spanId => {
        const span = document.getElementById(spanId);
        if (span) span.innerHTML = '';
    });
}

// Centralized function to clear local storage & optionally preserves admin state with parameter
// Modified clearLocalStorageItems to optionally preserve admin state
function clearLocalStorageItems(preserveAdminState = false) {
    // If preserving admin state, save it first
    let savedAdminState = null;
    if (preserveAdminState) {
        savedAdminState = localStorage.getItem('adminReloadState');
    }
    
    // Clear specific local storage items
    const itemsToRemove = [
        'userId', 'anonymousId', 'groupId', 
        'userTraits', 'groupTraits'
    ];
    itemsToRemove.forEach(item => localStorage.removeItem(item));
    
    // Clear all segment-related local storage items
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('ajs_') || key.startsWith('seg_')) {
            localStorage.removeItem(key);
        }
    });
    
    // Restore admin state if needed
    if (preserveAdminState && savedAdminState) {
        localStorage.setItem('adminReloadState', savedAdminState);
    }
}

// Function to save admin state before page reload
function saveAdminStateForReload() {
    // Always save the current state, whether enabled or not
    const adminReloadState = {
        isEnabled: adminState.isEnabled,
        currentAdmin: adminState.currentAdmin,
        originalContext: adminState.originalContext,
        originalUserId: adminState.originalUserId,
        originalAnonymousId: adminState.originalAnonymousId,
        originalTraits: adminState.originalTraits
    };
    
    // Save to localStorage, but use a timestamp to ensure freshness
    localStorage.setItem('adminReloadState', JSON.stringify({
        timestamp: Date.now(),
        state: adminReloadState
    }));
}

// Function to restore admin state after page reload
function restoreAdminStateAfterReload() {
    const savedAdminStateJSON = localStorage.getItem('adminReloadState');
    
    if (savedAdminStateJSON) {
        try {
            const savedData = JSON.parse(savedAdminStateJSON);
            
            // Check if data is fresh (less than 10 seconds old)
            const isDataFresh = (Date.now() - savedData.timestamp) < 10000;
            
            if (isDataFresh) {
                // Restore admin state
                adminState = { ...savedData.state };
                
                // Update UI based on restored state
                updateAdminUI(adminState.isEnabled);
                
                console.log('Admin state restored:', adminState.isEnabled ? 
                    'Admin mode enabled' : 'Admin mode disabled');
                
                // Clear the saved state from localStorage
                localStorage.removeItem('adminReloadState');
                
                return true;
            } else {
                // Data is stale, clear it
                localStorage.removeItem('adminReloadState');
                return false;
            }
        } catch (error) {
            console.error('Error restoring admin state:', error);
            localStorage.removeItem('adminReloadState');
            return false;
        }
    }
    return false;
}

// Updated handleAdminToggle function
async function handleAdminToggle(event) {
    const newAdminState = event.target.checked;
    
    // If the state didn't actually change, do nothing
    if (newAdminState === adminState.isEnabled) return;
    
    // Select a new random admin user each time admin mode is toggled on
    if (newAdminState) {
        currentAdminUser = adminUsers[Math.floor(Math.random() * adminUsers.length)];
        console.log('Selected new admin user:', currentAdminUser);
    }

    adminState.isEnabled = newAdminState;
    
    if (adminState.isEnabled) {
        try {
            // Get current client data before making changes
            const clientData = await getClientData();
            
            // Store original state
            adminState.currentAdmin = currentAdminUser; // Store the newly selected admin
            adminState.originalContext = clientData.context;
            adminState.originalUserId = clientData.clientUserId;
            adminState.originalAnonymousId = clientData.clientAnonymousId;
            adminState.originalTraits = clientData.traits;

            console.log('Admin mode activated with user:', adminState.currentAdmin);

            // Update UI without page reload
            updateAdminUI(true);
            
            // Reset user data
            // cookieReset();
            
            // No longer calling cookieReset() here to preserve user data
            // Save the admin state for potential reload
            saveAdminStateForReload();

        } catch (error) {
            console.error('Error activating admin mode:', error);
            // Reset the checkbox state
            event.target.checked = false;
            adminState.isEnabled = false;
        }
    } else {
        // Clear admin state
        const previousAdminState = {...adminState};
        adminState.currentAdmin = null;
        adminState.originalContext = null;
        adminState.originalUserId = null;
        adminState.originalAnonymousId = null;
        adminState.originalTraits = null;
        adminState.isEnabled = false;
        
        // Update UI to exit admin mode
        updateAdminUI(false);
        
        // Save the fact that admin mode is disabled
        saveAdminStateForReload();
        
        // Reset cookies and reload
        // cookieReset();
        // No longer calling cookieReset() here to preserve user data
    }
}

// Updated cookieReset function
const cookieReset = async () => {
    try {
        // Save current admin state before doing anything else
        saveAdminStateForReload();
        
        // Get the current anonymousId before reset
        const currentAnonymousId = analytics.user().anonymousId();

        // Reset client-side analytics
        analytics.reset();

        // Clear user data
        clearUserData();

        // Call server reset endpoint
        const response = await fetch('http://localhost:4100/api/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                anonymousId: currentAnonymousId
            })
        });

        if (!response.ok) {
            throw new Error(`Server reset failed: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Server reset result:', result);

         // Clear local storage items (but not admin state)
         clearLocalStorageItems(true); // Pass true to preserve admin state

        // Always reload to get fresh state
        // window.location.reload();
        console.log('User data reset complete');
    } catch (error) {
        console.error('Error during reset:', error);
        alert('Error during reset. Check console for details.');
    }
};

// Add this to your page load/initialization script
document.addEventListener('DOMContentLoaded', () => {
    // Check and restore admin state if applicable
    restoreAdminStateAfterReload();
});


let firstName =''
let lastName =''
let username =''
let phone =''
let street =''
let city =''
let state =''
let zipcode =''
let email =''

// Create a global object to store the current generated user data
let generatedUserData = {
    userId: '',
    anonymousId: '',
    traits: {}
  };


  const getUserData = async () => {
    console.log('Fetching user data...');
    try {
        // Save current admin state before fetching new user data
        if (adminState.isEnabled) {
            saveAdminStateForReload();
        }
        
        const response = await fetch('./users.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        console.log('User data fetched successfully:');
        if (users.length === 0) {
            console.log('No users found in users.json.');
            return;
        }

        // Select a random user from the array
        const randomIndex = Math.floor(Math.random() * users.length);
        const user = users[randomIndex];
        console.log('CURRENT USER : ', user);

        // Update UI elements
        document.getElementById('firstName-span').innerHTML = user.firstName;
        document.getElementById('lastName-span').innerHTML = user.lastName;
        document.getElementById('username-span').innerHTML = user.username;
        document.getElementById('phone-span').innerHTML = user.phone;
        document.getElementById('email-span').innerHTML = user.email;
        document.getElementById('street-span').innerHTML = user.streetAddress;
        document.getElementById('city-span').innerHTML = user.city;
        document.getElementById('state-span').innerHTML = user.state;
        document.getElementById('zipcode-span').innerHTML = user.zipcode;

        // Store traits in userTraits variable for backward compatibility
        userTraits = {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            phone: user.phone,
            street: user.streetAddress,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
            email: user.email,
        };
        document.getElementById('userTraits').innerText = `traits : ${JSON.stringify(userTraits)}`;

        // Get the IDs by calling syncIds
        const syncResult = await syncIds();
        
        // Store the complete user data in the global object
        generatedUserData = {
            userId: document.getElementById('userId').innerText.split(': ')[1] || '',
            anonymousId: document.getElementById('anonymousId').innerText.split(': ')[1] || '',
            traits: userTraits
        };
        
        console.log('Generated user data stored:', generatedUserData);
        
        // Update Global Variables for backward compatibility
        firstName = user.firstName;
        lastName = user.lastName;
        username = user.username;
        phone = user.phone;
        street = user.streetAddress;
        city = user.city;
        state = user.state;
        zipcode = user.zipcode;
        email = user.email;
        
        return generatedUserData;
    } catch (err) {
        console.error('Error fetching user data:', err);
        return null;
    }
};  


// Add a new function to handle the Reset User button click
function handleResetUser() {
    // First save admin state
    saveAdminStateForReload();
    
    // Perform reset
    cookieReset();
    
    // Reload the page with admin state preserved
    window.location.reload();
}

// Function to send anonymousId to the server and receive userId
let tempUserId
const syncIds = async () => {
    // Get anonymousId from Segment's Analytics
    const anonymousId = window.analytics.user().anonymousId();

    // Simulated Segment Analytics user
    const analytics = {
        user: () => ({
            anonymousId : anonymousId,
            id: (userId) => console.log(`User ID set to: ${userId}`)
        }),
    };


    try {
        // Send anonymousId to the server
        const response = await fetch(`/api/share-ids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ anonymousId }),
        });

        // Handle server response
        if (response.ok) {
            const { userId } = await response.json();
            console.log('1 - User ID :', userId);

            // Update userId
            tempUserId = userId
            document.getElementById('userId').innerText = `userId : ${userId}`;
            
            analytics.user().id(tempUserId);
            console.log('2 - User ID cookie : ', tempUserId);
            window.localStorage.ajs_user_id	= tempUserId;
            console.log('analytics.user().id(); : ', analytics.user().id())

            console.log('3 - User ID synchronized and saved:', userId);
            console.log('4 - Anonymous ID cookie : ', anonymousId);

        } else {
            console.error('Failed to synchronize user ID:', response.statusText);
        }
    } catch (error) {
        console.error('Error syncing user ID:', error);
    }
}



// FAKERS DATA : USERS.JSON FILE 
const userList = document.getElementById('user-list');
let fakerUserData;


// SPEC : COMMON FIELDS : CONTEXT OBJECT @ https://segment.com/docs/connections/spec/common/#context
const getClientData = () => {
    return new Promise((resolve) => {
        // Make sure analytics is ready before collecting data
        window.analytics.ready(() => {
            // Get user identifiers after analytics is ready
            const userId = window.analytics.user().id();
            const anonymousId = window.analytics.user().anonymousId();
            const userTraits = window.analytics.user().traits();

            const context = {
                campaign : {
                    name: document.location.href,
                    source: document.location.origin,
                    medium: document.location.protocol.replace(':', ''),
                    term: document.location.search,
                    content: document.location.pathname
                },
                locale : navigator.language,
                os : {
                    name : navigator.platform,
                    version : navigator.appVersion
                },
                page : {
                    path : window.location.pathname,
                    referrer : document.referrer,
                    search : window.location.search,
                    title : document.title,
                    url : window.location.href
                },
                screen : {
                    height : window.screen.height,
                    width : window.screen.width
                },
                timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
                userAgentData : {
                    userAgent : navigator.userAgent,
                    platform : navigator.userAgentData.platform || '',
                    brands : navigator.userAgentData.brands || []
                },
                test : 'test'
            };


            let clientUserId = analytics.user().id()
            console.log('CONTEXT clientUserId : ', clientUserId)
            let clientAnonymousId = analytics.user().anonymousId()
            let clientUserTraits = analytics.user().traits()
    

            console.log('Client data collected:', { clientUserId, clientAnonymousId, clientUserTraits, context });
            
            resolve({
                clientUserId,
                clientAnonymousId,
                traits: clientUserTraits,
                context
            });
        });
    });
};


// TRIGGER SEGMENT EVENTS FROM CLIENT OR SERVER 
const triggerEvent = async (eventType, sourceType, data) => {
    // Check for admin mode restrictions
    if (adminState.isEnabled && sourceType === 'client') {
        console.warn('Client-side events are disabled in admin mode');
        return;
    }
    
    // Ensure we have synced IDs if in admin mode
    if (adminState.isEnabled && sourceType === 'server') {
        await syncIds();
    }

    // Get the current user data displayed in UI
    const currentUIData = {
        userId: document.getElementById('userId').innerText.split(': ')[1] || '',
        anonymousId: document.getElementById('anonymousId').innerText.split(': ')[1] || '',
        traits: {
            firstName: document.getElementById('firstName-span').innerText || '',
            lastName: document.getElementById('lastName-span').innerText || '',
            username: document.getElementById('username-span').innerText || '',
            phone: document.getElementById('phone-span').innerText || '',
            email: document.getElementById('email-span').innerText || '',
            street: document.getElementById('street-span').innerText || '',
            city: document.getElementById('city-span').innerText || '',
            state: document.getElementById('state-span').innerText || '',
            zipcode: document.getElementById('zipcode-span').innerText || ''
        }
    };

    try {
        // Get client data
        let clientData = await getClientData();
        console.log('clientData : ', clientData);

        // Set appropriate data sources based on event type
        if (sourceType === 'server') {
            // For server-side events, prioritize generatedUserData
            userId = generatedUserData.userId || currentUIData.userId || clientData.userId;
            anonymousId = generatedUserData.anonymousId || currentUIData.anonymousId || clientData.anonymousId;
            traits = generatedUserData.traits || data.traits || currentUIData.userTraits || clientData.traits || {};
            
            // Ensure context includes traits
            context = {
                ...clientData.context,
                traits: traits
            };
            
            // Add admin data if in admin mode
            if (adminState.isEnabled && adminState.currentAdmin && sourceType === 'server') {
                context.isAdmin = true;
                context.admin = {
                    adminUserId: adminState.currentAdmin.userId,
                    firstName: adminState.currentAdmin.firstName,
                    lastName: adminState.currentAdmin.lastName,
                    adminEmail: adminState.currentAdmin.adminEmail
                };
                console.log('Added admin context:', context.admin);
            }
        } else {
            // For client-side events, use client data or fallback to existing values
            userId = generatedUserData.userId || clientData.clientUserId || userId;
            anonymousId = generatedUserData.anonymousId || clientData.clientAnonymousId || anonymousId;
            traits = generatedUserData.traits || clientData.traits || userTraits;
            context = {...clientData.context, traits: traits};
        }

        console.log('Using data:', {
            sourceType,
            userId,
            anonymousId,
            traits,
            context
        });
        
        console.log('context : ', context);
        
        page = clientData.context.page;
        name = page.title;
        category = 'Viewed';
        
        let payload = {userId, anonymousId, traits, context};
        console.log('payload : ', payload);
        
        // Spec Track : https://segment.com/docs/connections/spec/track/
        //    The Track method follows this format :
        //    analytics.track(event, [properties], [options], [callback]);
        if (eventType === 'track') {
            console.log('Track: Started');
        
            let eventName = data.event ? data.event : 'Button Clicked';
            let properties = {
                ...data.properties ? data.properties : null,
                button: data.button ? data.button : `${sourceType}TrackTrigger`,
                ...page
            };
            
            if (sourceType === 'client') {
                console.log('T- eventName:', eventName);
                console.log('T- properties:', properties);
                console.log('T- context:', context);
                console.log('T- userId:', userId);
                console.log('T- anonymousId:', anonymousId);
                
                analytics.track(eventName, properties, {context: context, userId: userId, anonymousId: anonymousId});
                renderResponse('Track', {
                    properties,
                    event: eventName,
                    context,
                    userId,
                    anonymousId
                }, 'client');
                console.log(`CLIENT: Track event ${eventName} sent successfully`);
            } else if (sourceType === 'server') {
                console.log('SERVER : context contain traits? ', context);
                fetch('http://localhost:4100/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        payload : {
                            userId,
                            anonymousId,
                            context,
                            event: eventName,
                            properties
                        }
                    }),
                })
                .then(response => {
                    console.log('Server-side Track:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status on Server-side Track: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Server-side Track response:', data);
                    renderResponse('Track', data, 'server');
                })
                .catch((err) => {
                    console.error('Error triggering server-side Track:', err);
                });
            }
            console.log('Track: Completed');
        }
        

        // Spec Identify : https://segment.com/docs/connections/spec/identify/
        //    The Identify method follows this format : 
        //    analytics.identify([userId], [traits], [options], [callback]);
        if (eventType === 'identify'){
            console.log('Identify : Started')

            if (sourceType ==='client'){    
                analytics.identify(userId, traits, {context, anonymousId})
                if (sourceType === 'client') {
                    analytics.identify(userId, traits, {
                        context,
                        anonymousId
                    });
                    console.log('CLIENT: Identify event sent successfully');
                    renderResponse('Identify', {
                        traits,
                        context,
                        userId,
                        anonymousId
                    }, 'client');
                }
                console.log('CLIENT : Identify event sent successfully');
            } else if (sourceType ==='server'){
                fetch('http://localhost:4100/identify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        payload : {
                            userId: userId,
                            anonymousId: anonymousId,
                            traits: traits,
                            context: context
                        }
                    }),
                })
                .then(response => {
                    console.log('Server response received:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Server-side Identify response:', data);
                    renderResponse('Identify', data,'server');
                })
                .catch(err => {
                    console.error('Error triggering server-side Identify:', err);
                    // Add error rendering
                    renderResponse('Identify', {
                        status: 'error',
                        message: err.message
                    });
                });
            }
            console.log('Identify : Completed')
        }

        // Spec Page : https://segment.com/docs/connections/spec/page/
        //    The Page method follows this format : 
        //    analytics.page([category], [name], [properties], [options], [callback]);
        if (eventType === 'page'){
            console.log('Page : Started');

            tempPayload = {...payload, category: category, name: name, properties: page}
            payload = tempPayload
            if (sourceType ==='client'){
                analytics.page(category, name, page, {context, userId, anonymousId})
                renderResponse('Page', {
                    properties: page,
                    category,
                    name,
                    context,
                    userId,
                    anonymousId
                }, 'client');
                console.log('CLIENT : Page event sent successfully');
            } else if (sourceType ==='server') {
                console.log('sending page payload to server')
                fetch('http://localhost:4100/page', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        payload : {
                            properties: page,
                            category,
                            name,
                            context,
                            userId,
                            anonymousId
                        }
                    }),
                })
                .then(response => {
                    console.log('Server response received:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Server-side Page response:', data);
                    renderResponse('Page', data, 'server');
                })
                .catch(err => {
                    console.error('Error triggering server-side Page:', err);
                    renderResponse('Page', {
                        status: 'error',
                        message: err.message
                    });
                });
            }
            console.log('Page: Completed');
        }


        // Spec Group : https://segment.com/docs/connections/spec/group/
        //    The Group method follows this format : 
        //    analytics.group(groupId, [traits], [options], [callback]);
        if (eventType === 'group') {
            console.log('Group: Started');
        
            const groupId = Math.floor(Math.random() * 1000000).toString();  // Generate a random group ID
            const groupTraits = {
                name: "Test Company",
                industry: "Tech",
                size: "1000",
                plan: "Enterprise"
            };
            
            if (sourceType === 'client') {
                analytics.group(groupId, groupTraits, {context: context, userId: userId, anonymousId: anonymousId});
                renderResponse('Group', {
                    properties: groupTraits,
                    groupId,
                    context,
                    userId,
                    anonymousId
                }, 'client');
                console.log('CLIENT: Group event sent successfully');
            } else if (sourceType === 'server') {
                fetch('http://localhost:4100/group', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        payload : {
                            groupId,
                            traits: groupTraits,
                            userId,
                            anonymousId,
                            context
                        }
                    })
                })
                .then(response => {
                    console.log('Server response received:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Server-side Group response:', data);
                    renderResponse('Group', data, 'server');
                })
                .catch(err => {
                    console.error('Error triggering server-side Group:', err);
                    renderResponse('Group', {
                        status: 'error',
                        message: err.message
                    });
                });
            }
            console.log('Group: Completed');
        }


        function generateId() {
            return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        }
        // Spec Alias : https://segment.com/docs/connections/spec/alias/
        //    The Alias method follows this format : 
        //    analytics.alias(userId, [previousId], [options], [callback]);
        if (eventType === 'alias') {
            console.log('Alias: Started');
        
            // Don't use JSON.stringify for IDs
            const previousId = userId;
            // If you're using uuidv4, make sure it's imported
            const newUserId = generateId();
            
            if (sourceType === 'client') {
                // Fix: Pass options as an object, not an array
                analytics.alias(newUserId, previousId, {context: context});
                renderResponse('Alias', {
                    previousId,
                    userId: newUserId,
                    context
                }, 'client');
                console.log('CLIENT: Alias event sent successfully');
            } else if (sourceType === 'server') {
                // Fix: Structure the payload correctly
                fetch('http://localhost:4100/alias', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        payload : {
                            userId: newUserId,
                            previousId,
                            context
                        }
                    })
                })
                .then(response => {
                    console.log('Server response received:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Server-side Alias response:', data);
                    renderResponse('Alias', data, 'server');
                })
                .catch(err => {
                    console.error('Error triggering server-side Alias:', err);
                    renderResponse('Alias', {
                        status: 'error',
                        message: err.message
                    });
                });
            }
            console.log('Alias: Completed');
        }
    } catch (error) {
        console.error('Error in triggerEvent:', error);
        throw error;
    }
};



// Add Event Requests to the DOM dynamically
const renderResponse = (type, data, source = 'server') => {
    // Debug incoming data
    console.log(`${type} Event Incoming Data:`, {
        fullData: data,
        directUserId: data.userId,
        nestedUserId: data?.payload?.userId,
    });
    
    const containerId = source === 'client' ? 'client-segment-responses' : 'server-segment-responses';
    const responseContainer = document.getElementById(containerId);
    
    if (!responseContainer) return;

    const timestamp = new Date().toLocaleTimeString();
    const responseItem = document.createElement("div");
    responseItem.className = "segment-response-item";
    
    // Normalize data structure
    const resolvedData = {
        userId: data.userId || data?.payload?.userId,
        anonymousId: data.anonymousId || data?.payload?.anonymousId,
        traits: data.traits || data?.payload?.traits,
        event: data.event || data?.payload?.event,
        name: data.name || data?.payload?.name,
        groupId: data.groupId || data?.payload?.groupId,
        previousId: data.previousId || data?.payload?.previousId,
        properties: data.properties || data?.payload?.properties,
    };

    console.log(`Resolved data for ${type} (${source}):`, resolvedData);

    // Simplify status
    let statusValue = 'success';
    if (data?.status) {
        if (typeof data.status === 'string' && data.status.toLowerCase() === 'error') {
            statusValue = 'error';
        } else if (typeof data.status === 'number' && data.status !== 200) {
            statusValue = 'error';
        }
    }

   // Helper function to create field badge
    const createFieldBadge = (name, color = '#6b7280') => {
        return `<span class="field-badge" style="color: ${color}">${name}</span>`;
    };

    // Helper function to create event name badge
    const createEventNameBadge = (name) => {
        return `<span class="event-name-badge">${name}</span>`;
    };

    // Get event-specific fields
    let eventFields = [];
    switch (type.toLowerCase()) {
        case 'track':
            if (resolvedData.event) {
                eventFields.push(createEventNameBadge(resolvedData.event));
            }
            if (resolvedData.userId) eventFields.push(createFieldBadge('userId', '#3b82f6'));
            if (resolvedData.anonymousId) eventFields.push(createFieldBadge('anonymousId', '#8b5cf6'));
            break;
            
        case 'identify':
            if (resolvedData.userId) eventFields.push(createFieldBadge('userId', '#3b82f6'));
            if (resolvedData.anonymousId) eventFields.push(createFieldBadge('anonymousId', '#8b5cf6'));
            if (resolvedData.traits) eventFields.push(createFieldBadge('traits'));
            break;
            
        case 'page':
            if (resolvedData.name) {
                eventFields.push(createEventNameBadge(resolvedData.name));
            }
            if (resolvedData.userId) eventFields.push(createFieldBadge('userId', '#3b82f6'));
            if (resolvedData.anonymousId) eventFields.push(createFieldBadge('anonymousId', '#8b5cf6'));
            break;
            
        case 'group':
            if (resolvedData.groupId) eventFields.push(createFieldBadge('groupId', '#0891b2'));
            if (resolvedData.userId) eventFields.push(createFieldBadge('userId', '#3b82f6'));
            if (resolvedData.anonymousId) eventFields.push(createFieldBadge('anonymousId', '#8b5cf6'));
            break;
            
        case 'alias':
            if (resolvedData.previousId) eventFields.push(createFieldBadge('previousId', '#c2410c'));
            if (resolvedData.userId) eventFields.push(createFieldBadge('userId', '#3b82f6'));
            if (resolvedData.anonymousId) eventFields.push(createFieldBadge('anonymousId', '#8b5cf6'));
            break;
    }

    console.log('Final event fields:', eventFields);

    // Create the content
    responseItem.innerHTML = `
        <div class="response-main">
            <div class="response-info">
                <span class="event-type">${type}</span>
                ${eventFields.length ? `<div class="event-fields">${eventFields.join('')}</div>` : ''}
            </div>
        </div>
        <div class="response-meta">
            <span class="status-badge status-${statusValue}">${statusValue}</span>
            <span class="timestamp">${timestamp}</span>
        </div>
        <div class="response-payload copyable">
${JSON.stringify(data, null, 2)}</div>
    `;

    // Add click handler
    responseItem.addEventListener('click', function() {
        const payload = this.querySelector('.response-payload');
        payload.classList.toggle('show');
    });

    // Insert at the top
    if (responseContainer.firstChild) {
        responseContainer.insertBefore(responseItem, responseContainer.firstChild);
    } else {
        responseContainer.appendChild(responseItem);
    }
};


async function handleFormSubmit(event, sourceType) {
    event.preventDefault();
    
    // Check if admin mode is enabled and force server-side if needed
    if (adminState.isEnabled && sourceType === 'client') {
        console.warn('Client-side events are disabled in admin mode. Switching to server-side.');
        sourceType = 'server';
    }

    // Collect form data
    const formData = {
        firstName: document.getElementById('formFirstName').value,
        lastName: document.getElementById('formLastName').value,
        username: document.getElementById('formUsername').value,
        phone: document.getElementById('formPhone').value,
        email: document.getElementById('formEmail').value,
        street: document.getElementById('formStreet').value,
        city: document.getElementById('formCity').value,
        state: document.getElementById('formState').value,
        zipcode: document.getElementById('formZipcode').value
    };

    // Update the traits
    userTraits = { ...formData };

    // Update display
    document.getElementById('firstName-span').innerText = formData.firstName;
    document.getElementById('lastName-span').innerText = formData.lastName;
    document.getElementById('username-span').innerText = formData.username;
    document.getElementById('phone-span').innerText = formData.phone;
    document.getElementById('email-span').innerText = formData.email;
    document.getElementById('street-span').innerText = formData.street;
    document.getElementById('city-span').innerText = formData.city;
    document.getElementById('state-span').innerText = formData.state;
    document.getElementById('zipcode-span').innerText = formData.zipcode;

    // Update traits display
    document.getElementById('userTraits').innerText = `traits: ${JSON.stringify(userTraits)}`;

    
    // Trigger syncIds
    await syncIds();
    
     // Use the existing triggerEvent function to send Identify and Track events
    // Pass form data for identify event (as traits)
    await triggerEvent('identify', sourceType, { 
        traits: formData
    });
    
    try{
        // Pass form data for track event (as properties) with event name
        let sourceTypeNew = 'server' ? 'Server' : 'Client';
        await triggerEvent('track', sourceType, { 
            event: 'Form Submitted',
            properties: {formData, button: `User Form ${sourceTypeNew} Submit`}
        });


        console.log(`${sourceType.toUpperCase()} events sent successfully`);

        // Update code editor with form data
        // Create a summary for the code editor
        const codeEditorContent = {
            sourceType: sourceType,
            identify: {
                userId: document.getElementById('userId').innerText.split(': ')[1] || '',
                traits: formData
            },
            track: {
                event: 'Form Submitted',
                properties: {formData},
                button: `User Form ${sourceTypeNew} Submit`
            }
        };

        // Format the JSON with proper indentation
        const formattedCode = JSON.stringify(codeEditorContent, null, 2);

        // Update code editor content
        document.querySelector('.code-editor').innerText = formattedCode;
        document.querySelector('.code-editor').classList.add('language-json');
    } catch (error) {
        console.error(`Error sending ${sourceType} events from form:`, error);
    }
}  


async function handleFormClear(event) {
    event.preventDefault();
    // Optional: Clear form
    document.getElementById('userForm').reset();
}



// Store event templates
const eventTemplates = {
    js: {
        track: `// Spec Track: https://segment.com/docs/connections/spec/track/
analytics.track(event, [properties], [options], [callback]);

analytics.track(eventName, properties, {
    context: context,
    userId: userId,
    anonymousId: anonymousId
});`,
        identify: `// Spec Identify: https://segment.com/docs/connections/spec/identify/
analytics.identify([userId], [traits], [options], [callback]);

analytics.identify(userId, traits, {
    context: context,
    anonymousId: anonymousId
});`,
        page: `// Spec Page: https://segment.com/docs/connections/spec/page/
analytics.page([category], [name], [properties], [options], [callback]);

analytics.page(category, name, page, {
    context: context,
    userId: userId,
    anonymousId: anonymousId
});`,
        group: `// Spec Group: https://segment.com/docs/connections/spec/group/
analytics.group(groupId, [traits], [options], [callback]);

analytics.group(groupId, groupTraits, {
    context: context,
    userId: userId,
    anonymousId: anonymousId
});`,
        alias: `// Spec Alias: https://segment.com/docs/connections/spec/alias/
analytics.alias(userId, [previousId], [options], [callback]);

analytics.alias(newUserId, previousId, {
    context: context
});`
    },
    json: {
        track: {},
        identify: {},
        page: {},
        group: {},
        alias: {}
    }
};

// Track current state
let currentFormat = 'js';
let currentEvent = 'track';
let customContext = {};

// Initialize editor
function initializeEditor() {
    updateEditorContent();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Format tab listeners
    document.querySelectorAll('.format-tabs .editor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveTab('.format-tabs', tab);
            currentFormat = tab.dataset.format;
            updateEditorContent();
        });
    });

    // Event tab listeners
    document.querySelectorAll('.event-tabs .editor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveTab('.event-tabs', tab);
            currentEvent = tab.dataset.event;
            updateEditorContent();
        });
    });

    // Editor content change listener
    document.getElementById('codeEditor').addEventListener('input', handleEditorChange);
}

// Set active tab
function setActiveTab(containerSelector, clickedTab) {
    document.querySelectorAll(`${containerSelector} .editor-tab`).forEach(tab => {
        tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
}

// Update editor content based on current state
function updateEditorContent() {
    const editor = document.getElementById('codeEditor');
    if (currentFormat === 'js') {
        editor.value = eventTemplates.js[currentEvent];
    } else {
        editor.value = JSON.stringify(eventTemplates.json[currentEvent], null, 2);
    }
}

// Handle editor content changes
function handleEditorChange(e) {
    const content = e.target.value;
    
    if (currentFormat === 'json') {
        try {
            const jsonContent = JSON.parse(content);
            updateFormFields(jsonContent);
            eventTemplates.json[currentEvent] = jsonContent;
        } catch (error) {
            console.log('Invalid JSON');
        }
    }
}

// Update form fields based on JSON content
function updateFormFields(jsonContent) {
    // Extract properties and context
    const properties = jsonContent.properties || {};
    const context = jsonContent.context || {};
    
    // Update context across all events
    if (Object.keys(context).length > 0) {
        customContext = { ...customContext, ...context };
        updateAllEventContexts();
    }
    
    // Update form fields based on properties
    Object.entries(properties).forEach(([key, value]) => {
        createOrUpdateFormField(key, value);
    });
}

// Create or update form field
function createOrUpdateFormField(key, value) {
    let field = document.getElementById(`form${key.charAt(0).toUpperCase() + key.slice(1)}`);
    
    if (!field) {
        // Create new field if it doesn't exist
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        formGroup.innerHTML = `
            <label for="form${key}">${key}</label>
            <input type="text" id="form${key}" class="form-control" placeholder="Enter ${key}">
        `;
        
        // Add to appropriate column
        const columns = document.querySelectorAll('.form-column');
        const targetColumn = columns[columns.length - 1].children.length > columns[0].children.length ? 
            columns[0] : columns[columns.length - 1];
        
        targetColumn.appendChild(formGroup);
    }
    
    // Update field value
    field = document.getElementById(`form${key}`);
    field.value = value;
}

// Update context across all events
function updateAllEventContexts() {
    Object.keys(eventTemplates.json).forEach(eventType => {
        if (eventTemplates.json[eventType].context) {
            eventTemplates.json[eventType].context = { ...eventTemplates.json[eventType].context, ...customContext };
        }
    });
}

// Handle send button clicks
function handleEditorSend(sourceType) {
    const content = document.getElementById('codeEditor').value;
    
    if (currentFormat === 'json') {
        try {
            const jsonContent = JSON.parse(content);
            triggerEvent(currentEvent, sourceType, jsonContent);
        } catch (error) {
            console.error('Invalid JSON');
        }
    } else {
        // Handle JS format - you might want to add validation here
        triggerEvent(currentEvent, sourceType);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeEditor);



// COPY ICON FUNCTIONALITY
function setupCopyIcon(iconElement, dataToCopy) {
    // Add click event listener to the icon
    iconElement.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent triggering other click events
      
      // Copy the data to clipboard
      navigator.clipboard.writeText(dataToCopy)
        .then(() => {
          // Briefly change the icon to show success
          iconElement.classList.remove('bi-copy');
          iconElement.classList.add('bi-check2');
          
          // Restore the original icon after a short delay
          setTimeout(() => {
            iconElement.classList.remove('bi-check2');
            iconElement.classList.add('bi-copy');
          }, 1000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          // Show error indicator
          iconElement.classList.remove('bi-copy');
          iconElement.classList.add('bi-x-circle');
          setTimeout(() => {
            iconElement.classList.remove('bi-x-circle');
            iconElement.classList.add('bi-copy');
          }, 1000);
        });
    });
  }


function addCopyIconToElement(element, dataToCopy) {
    // Create the copy icon
    const copyIcon = document.createElement('i');
    copyIcon.className = 'bi bi-copy';
    copyIcon.style.cursor = 'pointer';
    copyIcon.style.marginLeft = '5px';
    copyIcon.style.fontSize = '1rem';
    
    // Set up the copy functionality
    setupCopyIcon(copyIcon, dataToCopy);
    
    // Append to the element
    element.appendChild(copyIcon);
    
    return copyIcon;
}

// USAGE EXAMPLE
// addCopyIconToElement(userIdElement, userIdElement.textContent);
{/* <i  onclick="" class="bi bi-copy"></i> */}
{/* <i  class="bi bi-copy" style="font-size: 2rem;"></i> */}

// Add to many elements with a specific class
document.querySelectorAll('.copyable').forEach(element => {
    addCopyIconToElement(element, element.textContent);
});