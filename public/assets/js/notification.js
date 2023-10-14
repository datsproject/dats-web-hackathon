function savedSuccessNotify() {
    Lobibox.notify('success', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        icon: 'bx bx-check-circle',
        delayIndicator: false,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'Saved successfully.'
    });
}

function savedWarningNotify(message) {
    Lobibox.notify('warning', {
        icon: 'bx bx-error-circle',
        delay: false,
        delayIndicator: false,
        position: 'center top',
        size: 'mini',
        msg: message
    });
}

function savedErrorNotify(message) {
    Lobibox.notify('error', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        icon: 'bx bx-no-entry',
        delayIndicator: false,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: message
    });
}