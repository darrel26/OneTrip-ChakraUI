import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function VectorMap({ visible }) {
  const styles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'translate3d(0px, 0px, 0x`px)'
      : 'translate3d(0px, -75px, 0px)',
    config: {
      friction: visible && 14,
      tension: visible && 120,
    },
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1040"
      height="531"
      fill="none"
      viewBox="0 0 1040 531"
    >
      <g>
        <g>
          <path
            fill="#E2E2E2"
            d="M241.637 50.109a34.381 34.381 0 00-2.247-8.605 3.897 3.897 0 00-1.98-2.438 4.081 4.081 0 00-1.965-.022l-10.087 1.543a3.867 3.867 0 00-2.302.894c-1.314 1.382-.02 3.607-.06 5.513-.046 2.144-1.95 3.884-4.015 4.46a15.178 15.178 0 01-6.38-.08l-14.105-2.192a23.26 23.26 0 0010.671-7.12c1.856-2.2 2.843-6.305.161-7.346a6.583 6.583 0 00-2.45-.197c-6.391.05-11.42-5.286-17.402-7.533a19.242 19.242 0 00-21.655 6.455l7.514.363a3.332 3.332 0 012.001.533c1.647 1.353-.4 3.952-.168 6.07.301 2.753 3.956 3.34 6.711 3.62 2.755.278 6.25 2.516 4.925 4.947-13.847 4.77-27.937-9.323-42.479-7.588-3.681.439-7.156 1.885-10.75 2.794-21.95 5.554-44.643-9.265-67.067-6.126a85.158 85.158 0 00-14.64 3.86c-3.053 1.003-6.236 2.086-8.454 4.41-2.217 2.324-3.061 6.298-.96 8.728a49.126 49.126 0 01-17.216-1.636 9.645 9.645 0 014.959 8.5 102.146 102.146 0 00-26.168 7.979 44.076 44.076 0 005.416 7.215L0 84.463c3.867.974 5.866 6.247 3.617 9.54 4.01-1.784 6.495-6.398 10.782-7.334 2.809-.612 5.667.537 8.331 1.616 2.665 1.08 5.594 2.126 8.352 1.316 2.758-.81 4.793-4.387 3.04-6.666a142.721 142.721 0 0136.253-5.664 4.547 4.547 0 012.746.521c1.598 1.11 1.177 3.504 1.091 5.448-.086 1.943 1.429 4.497 3.166 3.62-2.044 1.773-.297 5.109 1.663 6.972 1.96 1.863 4.324 4.434 3.124 6.858-.314.633-.845 1.139-1.146 1.777-.89 1.884.522 4.081 2.189 5.332 1.666 1.251 3.707 2.126 4.864 3.858 1.157 1.733.632 4.766-1.438 5.008l-5.882-7.469a15.314 15.314 0 00-3.974 7.53c6.238 5.1 7.176 15.479 1.954 21.614-2.669 3.135-6.464 5.04-9.776 7.486-3.312 2.445-6.377 5.927-6.369 10.045.014 7.113-.567 13.721 2.099 20.316a312.954 312.954 0 0016.99 35.447c1.681 3.006 3.853 6.301 7.258 6.819a418.835 418.835 0 01-11.621-31.917c2.243.008 4.836.186 6.15 2.004 1.09 1.505.856 3.551 1.194 5.378a16.65 16.65 0 002.125 4.994l20.549 36.605c1.704 3.034 3.658 6.292 6.914 7.521 2.081.785 4.49.637 6.405 1.768 1.502.887 2.514 2.461 4.045 3.296 4.329 2.361 10.348-2.167 14.394.652 1.156.806 1.892 2.087 2.958 3.01 3.736 3.236 9.865 1.071 14.179 3.485 2.779 1.555 4.22 4.666 5.703 7.486 3.714 7.062 9.723 13.981 17.682 14.543 2.5.176 5.054-.298 7.498.259 2.444.556 4.85 2.688 4.457 5.164-.672 4.244 1.425 8.891.862 13.151-1.026 7.759-12.032 11.169-12.978 18.939-.207 1.701.117 3.457-.288 5.122-.496 2.041-2.029 3.703-2.574 5.731-1.032 3.845 1.722 7.67 4.748 10.257 3.026 2.586 6.635 4.816 8.289 8.436 1.748 3.827.889 8.289 1.458 12.457 1.241 9.101 9.102 15.847 17.191 20.197 2.464 1.325 5.111 2.609 6.706 4.908 2.082 3.001 1.875 6.957 2.57 10.542 1.703 8.782 9.095 16.018 9.305 24.96.149 6.356-3.384 12.123-5.495 18.12a42.258 42.258 0 003.451 35.046c1.579 2.666 3.467 5.179 4.584 8.069 1.993 5.158 1.347 11.021 3.184 16.236 2.43 6.894 9.106 12.589 8.467 19.871 3.031 6.294 9.724 9.387 16.454 11.26l12.061 3.358c2.31.643 4.723 1.291 7.075.825 2.351-.465 4.596-2.418 4.535-4.815-5.915-1.334-12.019-2.752-16.895-6.356-4.876-3.605-8.216-10.023-6.366-15.797.858-2.678 2.683-5.77.948-7.982-.994-1.267-2.81-1.598-3.931-2.754-1.748-1.802-1.147-4.831.109-7.004 1.257-2.174 3.073-4.117 3.58-6.576a6.862 6.862 0 00-3.216-7.138 17.059 17.059 0 005.97-3.83c1.57-1.793 2.295-4.557 1.06-6.596 3.668.466 7.997.693 10.405-2.112 1.923-2.241 1.79-5.59 1.031-8.443-.76-2.852-2.044-5.623-2.084-8.575 8.461.401 16.939.113 25.353-.86a16.435 16.435 0 00-7.708-9.653c3.811-.645 7.282-5.207 8.486-8.879 1.204-3.673.897-7.673.153-11.466a6.146 6.146 0 01-.114-3.003c.429-1.368 1.772-2.202 3.015-2.916l18.915-10.863a11.02 11.02 0 003.024-2.233c1.982-2.327 1.688-5.841.674-8.725-1.015-2.884-2.64-5.595-3.031-8.627-1.169-9.068 8.537-15.574 11.813-24.109 1.286-3.35 1.548-6.991 1.797-10.57.267-3.844.287-8.31-2.665-10.787-2.83-2.375-7.251-1.845-10.211-4.054-2.715-2.025-3.651-5.958-6.617-7.594-2.693-1.486-6.069-.541-9.065-1.239-5.273-1.231-8.592-7.309-13.978-7.871-3.039-.318-6.478 1.168-8.969-.602-2.194-1.56-2.282-4.694-2.7-7.353a20.537 20.537 0 00-16.575-16.629c-3.133-.502-6.543-.311-9.209-2.033-2.699-1.744-3.936-5.008-6.056-7.422-3.417-3.892-8.799-5.274-13.84-6.459l-20.505-4.821c-3.64-.856-8.333-1.309-10.286 1.879a14.747 14.747 0 00-1.217 3.827 11.85 11.85 0 01-11.144 8.388 13.177 13.177 0 00-7.772-6.013c-2.079-.58-4.304-.644-6.288-1.497a8.83 8.83 0 01-3.832-12.252 10.995 10.995 0 00-1.879-13.225c-3.487-3.131-8.531-3.888-13.207-3.574-1.225-2.672.823-5.687 3.029-7.629 2.207-1.942 4.886-3.851 5.367-6.751.756-4.562-5.065-8.026-9.484-6.666-4.419 1.36-7.239 5.652-9.104 9.884-1.069 2.427-1.979 4.984-3.666 7.031-1.688 2.047-4.405 3.512-6.975 2.855-3.639-.93-5.044-5.253-5.85-8.921-1.08-4.922-2.167-9.912-1.941-14.946.227-5.034 1.924-10.202 5.636-13.61 6.048-5.553 15.328-5.009 23.491-4.123-1.929-2.173-1.452-5.835.612-7.881a8.959 8.959 0 018.12-1.995 11.193 11.193 0 016.292 3.762c2.319 2.828 2.979 6.647 4.732 9.857 1.754 3.21 5.697 5.949 8.924 4.226 2.787-1.487 3.23-5.352 2.536-8.435-.694-3.082-2.167-6.08-1.916-9.229.479-6.01 6.709-9.627 12.206-12.102 5.498-2.475 11.792-5.804 12.663-11.769.03-1.168.25-2.324.653-3.42a6.7 6.7 0 012.461-2.315c16.044-10.603 32.355-21.335 50.692-27.129.954-.301 1.066.034 2.038-.203 1.361-.786.46-2.962-.845-3.838-1.305-.876-3.049-1.548-3.38-3.085-.243-1.129.423-2.238.595-3.381.425-2.807-2.933-5.398-5.541-4.276-1.473-1.951 1.442-4.218 3.799-4.866a103.084 103.084 0 0121.67-3.54 3.903 3.903 0 012.466.419c1.231.853 1.074 2.808.201 4.025-.872 1.217-2.229 1.982-3.316 3.011a9.052 9.052 0 00-2.348 9.105c3.826 1.947 7.985 3.95 12.223 3.264 4.237-.685 7.998-5.446 6.007-9.249-1.855-3.541-7.427-4.339-8.385-8.22-1.121-4.544 5.311-8.585 3.862-13.036-.635-1.949-2.578-3.096-4.068-4.504a12.222 12.222 0 01-2.675-13.551 15.417 15.417 0 01-13.522-4.232c-3.235-3.264-5.815-8.413-10.408-8.267-4.215.134-7.846 5.05-11.787 3.55-.969-.368-1.992-1.12-2.931-.68a2.42 2.42 0 00-1.093 1.816c-1.002 4.788.721 10.244-1.889 14.382-2.84 4.502-9.409 5.126-12.851 9.187-1.869 2.204-2.593 5.174-4.311 7.497-1.718 2.324-5.364 3.802-7.426 1.777a10.235 10.235 0 00-2.78-12.446 27.308 27.308 0 00-6.141-2.987 36.414 36.414 0 01-6.861-3.823 6.765 6.765 0 01-2.519-2.695 6.148 6.148 0 01.172-4.262 17.427 17.427 0 0113.868-11.494c2.744-.373 5.939-.242 7.756-2.333.961-1.106 1.465-2.78 2.86-3.229a4.219 4.219 0 012.641.325l10.246 3.606a7.187 7.187 0 003.649.604 2.474 2.474 0 002.14-2.6c-.327-1.702-2.945-2.518-2.707-4.234a2.824 2.824 0 01.857-1.442A36.63 36.63 0 01274.94 46.29c1.293 2.124-.752 4.639-2.454 6.452-1.702 1.813-3.069 5.052-1.011 6.448a5.64 5.64 0 002.728.614 23.815 23.815 0 017.26 2.203 139.598 139.598 0 0110.418 5.057c-.301-2.245-.588-4.61.263-6.709.851-2.098 3.269-3.745 5.381-2.927 2.035.787 3.079 3.483 5.248 3.73 2.893.329 4.034-3.945 2.826-6.594-1.209-2.648-3.601-4.867-3.801-7.771-.134-1.96.611-4.39-.954-5.577a4.259 4.259 0 00-1.847-.647l-39.083-7.192c-2.321-.428-5.675-.1-5.778 2.258-.057 1.316 1.119 2.617.598 3.827-.556 1.292-2.381 1.174-3.711 1.63-2.063.71-3.098 3.159-2.9 5.331a14.84 14.84 0 002.448 6.008c-2.542-1.063-6.392-1.259-8.934-2.322z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M310.127 13.617l5.498 1.056a7.125 7.125 0 00-7.414 7.72c5.148 1.72 10.761.046 16.184.275 5.423.229 11.733 4.102 10.807 9.45-.28 1.618-1.214 3.234-.728 4.801.34 1.1 1.309 1.879 1.856 2.89 1.14 2.11.229 4.777-1.21 6.694-1.44 1.916-3.374 3.446-4.637 5.483-3.142 5.067-1.357 11.617.515 17.277a15.232 15.232 0 002.928 5.849c2.773 2.948 7.292 3.204 11.339 3.263 2.945.043 6.319-.102 8.182-2.384 2.432-2.98.731-7.628 2.332-11.125 1.455-3.176 5.159-4.538 8.516-5.504 6.149-1.77 12.415-3.276 18.229-5.95 7.218-3.32 13.965-8.494 21.899-8.922 2.226-.12 4.507.143 6.651-.467s4.181-2.463 4.019-4.687c-.139-1.9-1.746-3.294-3.002-4.726-1.256-1.432-2.242-3.634-1.088-5.15l20.797-3.884c-1.474-4.017-2.623-9.308.765-11.923 1.222-.944 2.858-1.32 3.899-2.461 1.773-1.944.882-5.293-1.166-6.947-2.047-1.653-4.815-2.037-7.438-2.255-9.119-.757-18.29-.257-27.426.244l-53.58 2.937c-3.595.197-7.746-.104-11.044 1.123-2.792 1.038-4.776 2.944-7.969 3.614-5.894 1.236-12.38.4-17.714 3.709z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M999.077 476.052a29.504 29.504 0 00-4.367 1.567c-3.124 1.59-5.25 4.61-8.062 6.704-2.69 2.004-5.929 3.104-9.109 4.173-.935.827-.506 2.492.51 3.219a6.314 6.314 0 003.596.808c3.303.073 6.783.105 9.677-1.491a30.474 30.474 0 004.556-3.616c3.383-2.823 7.442-4.685 11.472-6.485a13.181 13.181 0 003.99-2.39c2.53-2.489 2.71-6.33-.94-7.178-2.94-.684-8.52 3.782-11.323 4.689z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M1030.81 455.312c.33-3.471-.95-6.902-3.47-9.307-.04 3.428-.14 7.08-2.07 9.914-1.37 2.02-3.53 3.384-5.03 5.307-1.51 1.924-2.18 4.973-.41 6.661a6.615 6.615 0 003.92 1.351c3.51.413 7.58.644 10.04-1.895 1.35-1.385 2-3.438 3.64-4.456a4.365 4.365 0 001.6-1.143c.68-1.077-.4-2.496-1.61-2.884-1.21-.388-2.55-.206-3.76-.574-1.22-.369-2.34-1.738-1.71-2.846"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M974.408 329.651a15.793 15.793 0 01-5.636.332c-3.128-.575-5.563-2.932-8.088-4.866a35.678 35.678 0 00-20.846-7.283c-6.862-.13-13.789 1.73-20.529.432.44 2.45 2.536 4.287 4.773 5.379 2.236 1.092 4.704 1.641 6.951 2.711a16.6 16.6 0 018.039 8.363c.724 1.689 1.179 3.528 2.275 5.003 2.241 3.014 6.488 3.676 10.236 3.43 4.887-.322 9.99-1.727 14.537.094 3.478 1.392 5.967 4.436 8.871 6.803 2.904 2.367 6.994 4.124 10.328 2.416a17.074 17.074 0 01-11.814-16.43c3.27.301 12.69.185 12.183-5.372-.43-4.71-8.472-1.52-11.28-1.012z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M923.075 374.808c.581-3.185 3.757-5.997 2.767-9.08-.684-2.132-3.155-3.184-5.394-3.237-2.238-.052-4.437.615-6.675.677a32.684 32.684 0 00-4.37.062c-4.443.731-7.181 5.387-11.368 7.043-2.545 1.006-5.405.814-8.053 1.51-6.01 1.58-9.812 7.259-14.013 11.838a50.015 50.015 0 01-25.385 14.803c-3.417.791-7.09 1.297-9.806 3.517-3.597 2.939-4.482 7.977-5.283 12.552a207.186 207.186 0 01-10.093 37.051l14.271 1.822c2.713.347 5.524.686 8.139-.118a23.627 23.627 0 005.353-2.852 53.44 53.44 0 0120.879-7.536c3.737-.513 7.656-.607 11.162.782 3.507 1.389 6.516 4.539 6.81 8.299a8.768 8.768 0 018.762 2.131 15.226 15.226 0 014.183 8.351c.376 1.953.752 4.292 2.564 5.111 1.478.668 3.173-.051 4.79-.181 5.487-.439 10.039 5.959 15.432 4.857 5.784-1.182 7.204-9.843 12.846-11.578 3.24-.997 7.786.215 9.338-2.799 1.367-2.657-1.362-5.723-1.08-8.698.346-3.663 4.667-5.218 7.998-6.781 11.484-5.389 16.934-20.845 11.369-32.245-3.297-6.754-9.785-12.071-10.983-19.491-.922-5.708 1.329-12.365-2.311-16.859-1.852-2.286-4.987-3.548-6.088-6.275-.694-1.717-.415-3.665-.788-5.479-.374-1.813-1.956-3.71-3.747-3.24-5.199 1.364-6.858 17.424-9.641 21.327-4.231 5.931-12.917 2.024-11.585-5.284z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M835.531 335.709c-1.777-.498-3.717-.989-5.419-.277-1.703.712-2.697 3.211-1.33 4.451 10.688-.416 21.442-.829 32.04.622 12.21 1.672 24.294 5.815 36.557 4.596a186.056 186.056 0 00-21.326-4.948l-12.006-2.294a92.955 92.955 0 00-9.749-1.506c-6.849-.566-12.033 1.244-18.767-.644z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M846.241 298.493c-.887-.074-1.986-.138-2.445.625-.439.729.063 1.692-.173 2.509-.322 1.117-1.784 1.402-2.937 1.25-1.152-.152-2.398-.516-3.419.04a2.897 2.897 0 00-1.12 3.292 8.472 8.472 0 001.976 3.15 32.146 32.146 0 005.128 5.143c3.673 2.712 8.65 4.019 10.964 7.955a5.278 5.278 0 001.464 1.971c1.111.703 2.559.168 3.755-.378l4.192-1.916a4.768 4.768 0 001.96-1.332c.958-1.3.369-3.148-.434-4.547-.804-1.4-1.833-2.849-1.661-4.454.308-2.862 3.987-3.956 5.5-6.405 1.525-2.468.532-5.648.708-8.544.206-3.387 2.334-7.792-1.09-10.322-2.91-2.151-5.691-.164-7.78 2.21-4.406 5.007-6.489 10.429-14.588 9.753z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M871.677 247.9c1.431 2.74 4.414 4.376 5.975 7.044 1.692 2.893 1.499 6.63 3.334 9.434 1.883 2.876 5.672 4.404 6.728 7.675 1.152 3.572-1.463 7.914.622 11.035a4.63 4.63 0 006.794.624 4.985 4.985 0 00-.205-6.954c-1.235-1.125-3.007-1.612-4.038-2.926a6.146 6.146 0 01-1.046-2.546 16.672 16.672 0 01.262-7.99 3.55 3.55 0 00.201-2.089c-.464-1.349-2.29-1.445-3.572-2.07-2.911-1.421-2.84-5.53-2.332-8.729-.338 2.13-7.925-1.493-8.72-2.7-1.578-2.396-.719-7.02-1.032-9.668-3.407 1.641-4.721 6.51-2.971 9.86z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M795.24 290.052c-1.401-1.568-3.51-3.208-5.387-2.262-1.433.721-1.827 2.703-1.265 4.205a9.256 9.256 0 003.055 3.642c3.912 3.227 8.125 6.139 11.539 9.89 6.108 6.713 9.344 15.771 15.987 21.955a8.97 8.97 0 005.034 2.724c1.935.18 4.109-1.059 4.331-2.99.183-1.591-.926-3.014-2.009-4.193-2.581-2.807-5.406-5.391-7.842-8.323a7.003 7.003 0 01-2.005-4.187c-.012-1.579 1.428-3.232 2.958-2.841-1.861-.475-3.241-3.576-5.972-4.158-2.282-.487-2.834.926-5.551-.239-5.181-2.222-9.245-9.162-12.873-13.223z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M509.323 209.652c.363 1.947.72 3.997.082 5.871-.638 1.875-2.645 3.442-4.541 2.867-1.47-.446-2.32-1.925-3.364-3.052-5.809-6.27-18.913-2.64-22.501-10.397-1.464-3.166-.469-6.959-1.468-10.302a9.169 9.169 0 00-9.285-6.307c-1.849.267-3.65.804-5.343 1.595a134.726 134.726 0 01-35.401 8.854 29.091 29.091 0 00-6.803 1.238c-4.987 1.808-8.395 6.432-10.821 11.151-2.425 4.718-4.216 9.827-7.467 14.019-3.418 4.406-8.206 7.491-12.673 10.828a12.929 12.929 0 00-4.181 4.382c-.968 1.988-.914 4.301-.839 6.511l.913 26.844c.118 3.452.265 7.028 1.811 10.118 1.929 3.859 5.741 6.386 8.386 9.794a19.185 19.185 0 013.98 12.251c-.057 1.777-.233 3.879 1.151 4.995a5.062 5.062 0 002.83.814l36.312 2.972c6.387.523 13.466 1.382 17.636 6.249 1.969 2.296 3.55 5.599 6.564 5.846 1.293.105 2.552-.426 3.845-.528 3.263-.258 6.13 2.218 7.939 4.946a21.94 21.94 0 013.524 14.081c-.296 3.111-1.261 6.137-1.469 9.256-.792 11.867 9.269 22.178 9.464 34.071.115 6.995-3.206 13.531-6.444 19.733 5.226 7.916.947 18.457 3.027 27.711 1.974 8.78 9.294 15.653 11.118 24.465.835 4.034.884 8.998 4.441 11.076a10.122 10.122 0 005.025 1.006 66.24 66.24 0 0030.165-6.867c4.398-2.183 8.957-5.442 9.725-10.292.62-3.911-1.364-8.286.655-11.693 2.379-4.015 8.473-3.697 11.973-6.784 5.679-5.008 1.251-14.559 3.552-21.773 2.068-6.484 9.187-9.929 12.716-15.748a27.993 27.993 0 002.955-8.009 114.247 114.247 0 003.007-20.427c.094-4.183.402-8.359.924-12.511 3.805-23.638 27.173-39.466 34.76-62.174.725-2.169 1.065-5.057-.864-6.284a5.529 5.529 0 00-3.675-.385l-16.738 2.11c-2.08.263-4.283.508-6.193-.356-1.909-.864-3.277-3.279-2.265-5.113 2.843-5.15-3.005-11.658-5.603-16.935a249.803 249.803 0 00-24.885-40.357 4.11 4.11 0 01-1.091-2.369l4.751.159c-1.603-5.755-4.25-12.052-9.84-14.157-3.151-1.186-6.639-.776-10-.592-9.628.526-19.949-.928-29.477-2.401z"
          ></path>
        </g>
        <g>
          <path
            fill="#E2E2E2"
            d="M559.317 38.976c2.519 2.675 5.342 5.512 8.987 5.978 6.438.824 11.067-5.834 14.014-11.616a5.677 5.677 0 005.924 5.25 11.7 11.7 0 004.455-1.74 87.763 87.763 0 0141.578-10.75 4.49 4.49 0 013.429-4.936c2.956-.586 5.618 1.97 7.044 4.624 1.425 2.654 2.314 5.73 4.58 7.717 2.265 1.987 6.65 1.9 7.545-.977.859-2.762-2.019-5.117-4.409-6.746-2.391-1.628-4.911-4.642-3.301-7.045 12.213-2.704 24.502-5.417 37-5.955a15.495 15.495 0 006.228-1.073c1.906-.935 3.421-3.058 2.908-5.118a14.104 14.104 0 01-14.718-5.552c17.341-1.43 35.785-2.65 51.153 5.51 1.844 3.958-7.555 7.252-5.04 10.823.802 1.139 2.409 1.272 3.802 1.298 10.679.198 21.42.393 31.979-1.22 3.859-.589 7.756-1.42 11.631-.943 6.452.796 11.971 5.102 18.32 6.505 2.583.572 5.48.591 7.659-.912 2.178-1.503 3.114-4.924 1.329-6.878 5.977-5.858 15.897-4.406 23.783-1.602 7.885 2.805 15.355 7.328 23.701 7.953 5.985.448 12.053-1.162 17.966-.139 3.716.644 7.175 2.297 10.807 3.312 6.869 1.921 14.136 1.516 21.268 1.608a149.022 149.022 0 0153.106 10.553c2.2.716 4.215 1.907 5.904 3.488 1.573 1.685 2.375 4.303 1.318 6.351l-17.473-2.553c1.647 3.241 5.906 3.793 9.364 4.911 3.459 1.118 7.045 4.938 4.967 7.92-3.748-1.193-7.144 2.553-9.037 6-1.893 3.448-4.2 7.577-8.127 7.787-3.517.188-7.77-2.807-10.063-.133a68.646 68.646 0 018.086 12.927c2.264 4.718 3.877 10.663.816 14.908a3.864 3.864 0 01-2.065 1.602c-2.5.633-4.125-2.426-5.917-4.28-2.259-2.335-5.676-2.997-8.735-4.092-3.06-1.096-6.282-3.25-6.522-6.491-.149-2.017.916-3.89 1.7-5.754a22.167 22.167 0 001.684-9.944c-.171-2.735-.938-5.58-2.903-7.492-1.964-1.91-5.355-2.517-7.464-.767-.984.817-1.773 2.123-3.051 2.172-2.258.087-3.991-3.85-5.808-2.506a6.172 6.172 0 01-.838 4.128c-5.421 4.714-13.748 2.72-20.737 4.385a38.914 38.914 0 00-9.46 4.132 6.084 6.084 0 00-2.704 2.27c-.873 1.695.089 3.866 1.627 4.993a12.91 12.91 0 005.364 1.831c8.52 1.614 17.163 4.111 23.89 9.584 6.726 5.472 11.137 14.517 9.008 22.923l-16.801-16.054a248.57 248.57 0 011.087 20.278 9.118 9.118 0 01-.533 3.9c-1.198 2.646-4.444 3.536-7.288 4.12a5.708 5.708 0 00-4.383 7.315c1.01 3.294 3.531 5.862 5.838 8.421 2.307 2.56 4.578 5.468 4.88 8.901.302 3.433-2.288 7.302-5.725 7.063-2.606-.181-4.539-2.514-5.651-4.878-1.111-2.364-1.773-4.997-3.443-7.006-5.055-6.079-16.409-3.475-20.937-9.956a10.24 10.24 0 00-2.118 9.746c2.107-1.319 4.991-.093 6.573 1.823 1.583 1.916 2.33 4.373 3.573 6.525 1.677 2.905 4.347 5.479 4.581 8.825a28.781 28.781 0 00.064 3.795c.416 2.028 2.129 3.483 3.317 5.178 2.764 3.942 2.628 9.359.846 13.832-1.782 4.474-4.983 8.212-8.153 11.836-5.538 6.33-11.189 12.623-17.754 17.88-1.873 1.5-3.872 2.974-5.039 5.072-1.167 2.097-1.227 5.04.566 6.635-1.283.065-3.583.696-4.866.76a113.25 113.25 0 01-.294-15.477c-5.062-2.431-10.513 4.079-9.86 9.657.653 5.578 4.688 10.054 7.56 14.88 2.101 3.529 3.662 7.643 2.96 11.69-.701 4.046-4.313 7.779-8.404 7.423-6.508-.568-9.23-9.911-15.674-10.98a2.633 2.633 0 00-1.696.169c-.957.525-1.123 1.805-1.177 2.895-.264 5.349-.492 10.91 1.596 15.842 3.055 7.215 10.947 13.275 9.291 20.933-8.918-4.145-13.554-14.146-15.659-23.752-2.106-9.607-2.456-19.691-6.23-28.773-2.866 3.673-8.889.637-11.507-3.216-2.482-3.653-4.01-7.879-6.418-11.581-2.408-3.702-6.098-7.017-10.509-7.22-4.626-.214-8.637 2.96-12.165 5.96-2.901 2.466-5.879 5.029-7.575 8.438-2.468 4.961-1.822 10.809-1.941 16.349-.129 5.988-1.398 12.307-5.479 16.691-4.082 4.384-11.616 5.911-16.118 1.96-2.35-2.063-3.488-5.145-4.502-8.103a396.79 396.79 0 01-12.188-43.511c-.756 3.36-3.707 7.692-6.526 5.712a5.841 5.841 0 01-1.504-1.937c-5.258-8.912-14.996-14.258-24.835-17.463-9.839-3.205-20.19-4.7-29.92-8.223a75.832 75.832 0 01-15.521-7.731 12.204 12.204 0 00-.746 12.486c2.158 3.822 7.042 6.033 11.223 4.697 2.16-.69 3.985-2.19 6.128-2.931 2.144-.74 5.021-.377 5.959 1.689.897 1.977-.459 4.368.214 6.432 1.024 3.144 5.766 3.386 7.424 6.247 1.233 2.128.218 4.955-1.543 6.672-1.761 1.718-4.111 2.66-6.262 3.855-6.976 3.88-11.937 10.502-18.033 15.654-6.097 5.152-14.699 8.914-21.965 5.609 1.732-8.77-8.715-15.209-10.637-23.939-.633-2.874-.305-5.926-1.208-8.727-1.307-4.054-4.904-6.842-7.855-9.914a38.914 38.914 0 01-10.673-28.311c.159-3.608.822-7.275 0-10.792-.822-3.517-3.734-6.921-7.342-6.761-8.241.364-18.623.977-22.947-6.048-1.543-2.508-2.214-6.18.017-8.101 1.574-1.355 3.897-1.227 5.964-1.024l18.568 1.826c4.343.428 9.038.78 12.764-1.49 3.727-2.27 5.342-8.297 1.891-10.968-2.521-1.952-7.039-1.846-7.772-4.949-.61-2.585 2.251-5.517.706-7.677-1.108-1.548-3.599-1.119-5.108.042-1.509 1.161-2.604 2.859-4.293 3.738-2.963 1.542-6.503.074-9.691-.923-3.188-.997-7.461-1.082-9.007 1.879-1.73 3.311 1.533 7.65-.183 10.968-2.269 4.386-9.952 1.889-13.139 5.662-3.656 4.33 2.488 10.787 1.255 16.318a10.159 10.159 0 01-10.007-.562 9.721 9.721 0 01-4.201-9.051c.305-2.488 1.603-5.028.733-7.38-.702-1.901-2.611-3.033-4.385-4.013l-18.045-9.971c-1.675 3.108.443 6.96 3.092 9.295 2.649 2.334 5.966 4.092 7.706 7.164a9.404 9.404 0 01-3.538 12.398 2.174 2.174 0 01-1.789.312 2.5 2.5 0 01-1.16-1.56c-3.183-8.148-7.963-16.181-15.606-20.437-7.642-4.256-18.623-3.381-23.634 3.789-1.19 1.703-1.989 3.644-3.026 5.444-5.509 9.566-17.32 14.095-28.354 13.799a5.622 5.622 0 01-3.093-.727c-1.783-1.231-1.703-3.845-1.43-5.995l1.158-9.124c.233-1.832.57-3.857 2.02-5.001 2.044-1.612 4.993-.595 7.596-.632a9.629 9.629 0 008.738-6.744 10.85 10.85 0 00-3.02-10.789c-1.193-1.121-2.795-2.529-2.165-4.039a3.339 3.339 0 012.342-1.577c4.676-1.358 9.617-1.714 14.215-3.316 4.598-1.603 9.057-4.88 10.146-9.627.334-1.454.486-3.216 1.792-3.937a5.378 5.378 0 012.071-.423 10.078 10.078 0 008.645-10.506c2.203-1.54 5.291-.407 7.422 1.23 2.132 1.638 4.014 3.802 6.608 4.508 4.835 1.316 9.506-2.964 14.516-2.984 2.107-.008 4.288.736 6.27.022 2.009-.724 3.209-2.724 4.752-4.202 1.542-1.477 4.248-2.379 5.672-.787l-1.213-8.982a17.658 17.658 0 0014.371-2.598l-15.672-5.295a3.405 3.405 0 01-1.466-.784c-1.139-1.227-.008-3.139.919-4.533 2.216-3.337 2.588-8.833-1.056-10.494-2.488-1.133-5.344.227-7.732 1.559l-11.439 6.378c-.363 2.174 2.296 3.406 3.943 4.87a6.61 6.61 0 01-4.311 11.553 8.237 8.237 0 011.471 6.984l-7.696.553a3.334 3.334 0 01-2.496-.487c-.823-.731-.712-2.012-.902-3.096-.461-2.617-3.023-4.451-5.638-4.922-2.616-.47-5.291.133-7.88.728a4.705 4.705 0 01-3.388-.078 3.384 3.384 0 01-1.34-1.692c-1.135-2.752-.074-5.988 1.749-8.342 1.824-2.354 4.32-4.075 6.562-6.035a38.236 38.236 0 0011.371-17.637c4.237-1.775 8.623-4.187 12.86-5.963a39.35 39.35 0 0121.151-4.098l14.348.274c4.248.081 8.611.185 12.539 1.805 3.928 1.62 7.38 5.122 7.651 9.362a2.874 2.874 0 01-.92 2.628 3.39 3.39 0 01-1.814.409c-3.962.139-5.651 1.126-9.613 1.265z"
          ></path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M149.234 114c2.672-3.344 8.766-11.448 8.766-16 0-5.52-4.479-10-10-10s-10 4.48-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM148 101.333A3.336 3.336 0 01144.667 98 3.336 3.336 0 01148 94.667 3.336 3.336 0 01151.333 98a3.336 3.336 0 01-3.333 3.333z"
          ></animated.path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M447.234 251c2.672-3.344 8.766-11.448 8.766-16 0-5.521-4.479-10-10-10s-10 4.479-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM446 238.333a3.335 3.335 0 01-3.333-3.333 3.335 3.335 0 013.333-3.333 3.335 3.335 0 013.333 3.333 3.335 3.335 0 01-3.333 3.333z"
          ></animated.path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M258.234 372c2.672-3.344 8.766-11.448 8.766-16 0-5.521-4.479-10-10-10s-10 4.479-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM257 359.333a3.335 3.335 0 01-3.333-3.333 3.335 3.335 0 013.333-3.333 3.335 3.335 0 013.333 3.333 3.335 3.335 0 01-3.333 3.333z"
          ></animated.path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M646.234 91C648.906 87.656 655 79.552 655 75c0-5.52-4.479-10-10-10s-10 4.48-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM645 78.333A3.336 3.336 0 01641.667 75 3.336 3.336 0 01645 71.667 3.336 3.336 0 01648.333 75 3.336 3.336 0 01645 78.333z"
          ></animated.path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M852.234 312c2.672-3.344 8.766-11.448 8.766-16 0-5.521-4.479-10-10-10s-10 4.479-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM851 299.333a3.335 3.335 0 01-3.333-3.333 3.335 3.335 0 013.333-3.333 3.335 3.335 0 013.333 3.333 3.335 3.335 0 01-3.333 3.333z"
          ></animated.path>
        </g>
        <g>
          <animated.path
            style={styles}
            fill="#319795"
            d="M565.234 345c2.672-3.344 8.766-11.448 8.766-16 0-5.521-4.479-10-10-10s-10 4.479-10 10c0 4.552 6.094 12.656 8.766 16 .64.797 1.828.797 2.468 0zM564 332.333a3.335 3.335 0 01-3.333-3.333 3.335 3.335 0 013.333-3.333 3.335 3.335 0 013.333 3.333 3.335 3.335 0 01-3.333 3.333z"
          ></animated.path>
        </g>
        <g>
          <path
            stroke="#319795"
            strokeDasharray="7 7"
            d="M147.5 115C451.277 93.806 605.265 137.969 853 309"
          ></path>
        </g>
        <g>
          <path
            stroke="#319795"
            strokeDasharray="7 7"
            d="M148 116.5c69.333 7.833 225.6 45.6 296 134"
          ></path>
        </g>
        <g>
          <path
            stroke="#319795"
            strokeDasharray="7 7"
            d="M257 372.5c98.5-72.833 355-187.3 593-62.5"
          ></path>
        </g>
        <g>
          <path
            stroke="#319795"
            strokeDasharray="7 7"
            d="M564.5 344.5c34.167-34.833 139.2-90.3 286-33.5"
          ></path>
        </g>
        <g>
          <path
            stroke="#319795"
            strokeDasharray="7 7"
            d="M447.5 251c9.833-48.833 62.7-149.2 195.5-160"
          ></path>
        </g>
      </g>
    </svg>
  );
}
