import Swal from 'sweetalert2';

// Custom SweetAlert2 Dark Glass Theme Mixin
const CyberSwal = Swal.mixin({
  background: '#08080C',
  color: '#FFFFFF',
  customClass: {
    popup: 'cyber-swal-popup',
    title: 'cyber-swal-title',
    htmlContainer: 'cyber-swal-html',
    confirmButton: 'cyber-swal-confirm-btn',
    cancelButton: 'cyber-swal-cancel-btn',
    denyButton: 'cyber-swal-deny-btn',
    input: 'cyber-swal-input',
  },
  buttonsStyling: false,
  backdrop: 'rgba(0, 0, 0, 0.75) backdrop-blur(12px)',
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster',
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster',
  },
});

/**
 * Display a themed confirmation modal (Replaces window.confirm)
 * @returns {Promise<boolean>} true if confirmed, false otherwise
 */
export const showConfirm = async ({
  title = 'Are you sure?',
  text = 'This action cannot be undone.',
  confirmButtonText = 'Yes, Proceed',
  cancelButtonText = 'Cancel',
  icon = 'warning',
  isDanger = false,
}) => {
  const result = await CyberSwal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
    focusCancel: isDanger,
    customClass: {
      popup: 'cyber-swal-popup',
      title: 'cyber-swal-title',
      htmlContainer: 'cyber-swal-html',
      confirmButton: isDanger ? 'cyber-swal-danger-btn' : 'cyber-swal-confirm-btn',
      cancelButton: 'cyber-swal-cancel-btn',
    },
  });

  return result.isConfirmed;
};

/**
 * Display a themed success modal
 */
export const showSuccess = (title = 'Success!', text = '') => {
  return CyberSwal.fire({
    title,
    text,
    icon: 'success',
    confirmButtonText: 'Great, Understood',
  });
};

/**
 * Display a themed error modal
 */
export const showError = (title = 'Operation Failed', text = '') => {
  return CyberSwal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonText: 'Dismiss',
  });
};

/**
 * Display a themed warning modal
 */
export const showWarning = (title = 'Attention Required', text = '') => {
  return CyberSwal.fire({
    title,
    text,
    icon: 'warning',
    confirmButtonText: 'Acknowledge',
  });
};

/**
 * Display a themed prompt modal (Replaces window.prompt)
 */
export const showPrompt = async ({
  title = 'Input Required',
  text = '',
  inputPlaceholder = 'Enter details...',
  inputValue = '',
  confirmButtonText = 'Submit',
}) => {
  const result = await CyberSwal.fire({
    title,
    text,
    input: 'text',
    inputValue,
    inputPlaceholder,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: 'Cancel',
    inputValidator: (value) => {
      if (!value || !value.trim()) {
        return 'Please enter a valid input!';
      }
    },
  });

  if (result.isConfirmed) {
    return result.value;
  }
  return null;
};

export default CyberSwal;
