<template>
  <header class="flex flex-col justify-center py-[10px] lg:py-[24px] page-width">
    <!-- Header Section -->
    <div class="flex justify-between items-center py-[14px]">
      <!-- Left Side (Menu Button) -->
      <div class="flex items-start gap-4 sm:hidden">
        <!-- Menu Icon for Mobile Screens -->
        <button @click="isMenuOpen = !isMenuOpen" class="block text-black p-2 rounded focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
            <path d="M1 1H20M1 7H20M1 13.5H20" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <!-- Logo Section - Centered -->
      <div class="ml-12 lg:ml-20 flex justify-center items-center flex-grow">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-[120px] h-[23px] lg:w-[188px] lg:h-[36px]" viewBox="0 0 188 36"
          fill="none">
          <g clip-path="url(#clip0_272_363)">
            <path
              d="M84.5724 27.1347C81.7162 27.1347 79.6332 26.4936 78.3244 25.2113C77.0151 23.929 76.3608 22.0059 76.3608 19.4411V16.378C76.3608 13.8844 77.0391 11.9787 78.3957 10.6609C79.7526 9.34301 81.811 8.68408 84.5724 8.68408C87.3337 8.68408 89.4691 9.32522 90.7665 10.6075C92.0637 11.8898 92.7123 13.8132 92.7123 16.378V19.4411C92.7123 21.911 92.0396 23.8104 90.6955 25.1398C89.3502 26.4704 87.3094 27.1347 84.5727 27.1347M89.0351 19.4411V16.378C89.0351 14.8819 88.7257 13.7954 88.1071 13.1189C87.4877 12.4422 86.3097 12.1039 84.5727 12.1039C82.8356 12.1039 81.6449 12.4422 81.0022 13.1189C80.3596 13.7954 80.0383 14.8822 80.0383 16.378V19.4411C80.0383 20.9134 80.3534 21.9878 80.9841 22.6645C81.6146 23.3413 82.8107 23.6796 84.5724 23.6796C86.3341 23.6796 87.4874 23.3475 88.1068 22.6826C88.7254 22.018 89.0348 20.9371 89.0348 19.4411"
              fill="#414042" />
            <path
              d="M112.17 1.80957V19.5123C112.17 22.0537 111.455 23.9593 110.027 25.2294C108.599 26.5001 106.6 27.1351 104.029 27.1351C98.5786 27.1351 95.8535 24.5948 95.8535 19.5123V16.4495C95.8535 11.273 98.3402 8.68443 103.315 8.68443C105.814 8.68443 107.551 9.45633 108.528 10.9999V1.80957H112.169H112.17ZM99.531 16.3781V19.4414C99.531 20.9375 99.8342 22.0181 100.441 22.683C101.048 23.3478 102.232 23.68 103.993 23.68C105.755 23.68 106.951 23.3416 107.582 22.6649C108.212 21.9882 108.528 20.9138 108.528 19.4414V16.3781C108.528 14.882 108.206 13.7957 107.564 13.119C106.921 12.4423 105.731 12.1039 103.993 12.1039C102.256 12.1039 101.077 12.4423 100.459 13.119C99.8395 13.7957 99.5307 14.8823 99.5307 16.3781"
              fill="#414042" />
            <path
              d="M116.56 5.21115C116.108 4.77196 115.882 4.24379 115.882 3.6261C115.882 3.0084 116.108 2.48053 116.56 2.04077C117.012 1.60186 117.548 1.38184 118.167 1.38184C118.786 1.38184 119.315 1.60186 119.756 2.04077C120.196 2.48053 120.416 3.00869 120.416 3.6261C120.416 4.24351 120.196 4.77196 119.756 5.21115C119.315 5.65119 118.786 5.87008 118.167 5.87008C117.548 5.87008 117.012 5.65119 116.56 5.21115ZM116.31 9.07605H119.988V26.7429H116.31V9.07605Z"
              fill="#414042" />
            <path
              d="M127.128 9.07625L129.02 22.2198C129.115 22.9087 129.27 23.3716 129.484 23.6089C129.699 23.8467 130.02 23.965 130.448 23.965C130.877 23.965 131.198 23.8405 131.412 23.5911C131.626 23.3417 131.781 22.8847 131.877 22.2198L133.269 12.5669C133.459 11.3086 133.828 10.4119 134.375 9.87781C134.923 9.34344 135.815 9.07625 137.053 9.07625C138.291 9.07625 139.13 9.32536 139.713 9.82415C140.296 10.3229 140.683 11.2372 140.873 12.5666L142.266 22.2196C142.361 22.9084 142.516 23.3713 142.73 23.6086C142.944 23.8464 143.265 23.9648 143.694 23.9648C144.123 23.9648 144.444 23.8402 144.658 23.5908C144.872 23.3414 145.026 22.8844 145.122 22.2196L147.014 9.07597H150.763L148.764 22.3975C148.501 24.0359 148.014 25.2354 147.3 25.9949C146.586 26.7547 145.384 27.1349 143.694 27.1349C142.17 27.1349 141.087 26.7547 140.445 25.9949C139.802 25.2354 139.361 24.0362 139.124 22.3975L137.946 13.7066C137.85 13.0894 137.749 12.6858 137.642 12.4955C137.535 12.3057 137.339 12.2102 137.053 12.2102C136.791 12.2102 136.607 12.3057 136.5 12.4955C136.393 12.6855 136.291 13.0894 136.197 13.7066L134.983 22.3975C134.744 24.0359 134.31 25.2354 133.68 25.9949C133.049 26.7547 131.971 27.1349 130.448 27.1349C128.734 27.1349 127.521 26.7609 126.807 26.0127C126.093 25.2648 125.616 24.0597 125.379 22.3972L123.379 9.07568H127.128V9.07625Z"
              fill="#414042" />
            <path
              d="M168.186 14.5253V21.4357C168.186 23.3829 167.584 24.8196 166.383 25.7455C165.18 26.6716 163.246 27.1345 160.581 27.1345C155.749 27.1345 153.333 25.3063 153.333 21.6495C153.333 19.7499 153.958 18.3783 155.208 17.5352C156.457 16.6927 158.26 16.2705 160.617 16.2705H164.508V14.525C164.508 12.7211 163.33 11.8184 160.974 11.8184C159.903 11.8184 159.069 12.0263 158.475 12.4414C157.879 12.8575 157.582 13.5992 157.582 14.6679H154.19C154.19 10.6785 156.451 8.68359 160.974 8.68359C165.781 8.68359 168.186 10.631 168.186 14.525M164.508 21.2575V19.0494H160.581C159.367 19.0494 158.469 19.2454 157.885 19.6369C157.302 20.0286 157.011 20.676 157.011 21.5781C157.011 22.5282 157.326 23.1693 157.957 23.5015C158.587 23.8345 159.45 24.0003 160.545 24.0003C161.878 24.0003 162.871 23.8221 163.526 23.4659C164.18 23.11 164.508 22.374 164.508 21.2575"
              fill="#414042" />
            <path
              d="M174.398 9.07617L177.611 22.1483C177.777 22.8609 177.998 23.3298 178.272 23.5551C178.545 23.7808 178.968 23.8935 179.539 23.8935C179.968 23.8935 180.312 23.7749 180.575 23.5376C180.836 23.3004 181.05 22.8375 181.217 22.1483L184.252 9.07617H188L183.752 26.743C183.133 29.379 182.104 31.3612 180.664 32.6918C179.223 34.0212 177.278 34.6624 174.827 34.6149L174.077 31.4448C175.79 31.4683 177.099 31.0765 178.004 30.2696C178.908 29.4621 179.575 28.2982 180.003 26.7789C179.646 26.9447 179.098 27.0286 178.361 27.0286C177.028 27.0286 176.076 26.6606 175.505 25.9242C174.934 25.1882 174.445 24.0364 174.041 22.4692L170.649 9.07645H174.398L174.398 9.07617Z"
              fill="#414042" />
            <path
              d="M69.4934 27.1348L67.6011 13.9912C67.5063 13.3023 67.3512 12.8394 67.1371 12.6021C66.9228 12.3643 66.6018 12.246 66.1732 12.246C65.7446 12.246 65.4233 12.3705 65.2092 12.6199C64.9952 12.8693 64.8404 13.3263 64.745 13.9912L63.3524 23.6444C63.1625 24.9027 62.7933 25.7994 62.2461 26.3335C61.6988 26.8679 60.8062 27.1351 59.5682 27.1351C58.3303 27.1351 57.4917 26.8859 56.9085 26.3872C56.3256 25.8884 55.9389 24.9741 55.7481 23.6447L54.3556 13.9915C54.2607 13.3026 54.1056 12.8397 53.8916 12.6024C53.6776 12.3646 53.3562 12.2463 52.9276 12.2463C52.499 12.2463 52.1777 12.3708 51.9637 12.6202C51.7497 12.8696 51.5951 13.3266 51.4994 13.9915L49.6075 27.1351H45.8584L47.8579 13.8135C48.1203 12.1751 48.6076 10.9756 49.3215 10.2161C50.0358 9.45634 51.2378 9.07617 52.9276 9.07617C54.4513 9.07617 55.5341 9.45634 56.1767 10.2161C56.8194 10.9756 57.2602 12.1748 57.4974 13.8135L58.6759 22.5045C58.7713 23.1216 58.8721 23.5252 58.9794 23.7156C59.0864 23.9054 59.2823 24.0008 59.5682 24.0008C59.8304 24.0008 60.0144 23.9054 60.1214 23.7156C60.2287 23.5255 60.3303 23.1216 60.4249 22.5045L61.6388 13.8135C61.8772 12.1751 62.3117 10.9756 62.9419 10.2161C63.5729 9.45634 64.6501 9.07617 66.1732 9.07617C67.8871 9.07617 69.1007 9.45012 69.8147 10.1983C70.5287 10.9462 71.0054 12.1514 71.2426 13.8138L73.2421 27.1353H69.4934V27.1348Z"
              fill="#414042" />
            <path
              d="M8.95895 35.0128C9.60555 35.6576 10.1865 35.9586 10.7869 35.9586C11.4352 35.9586 12.1911 35.6036 13.0976 34.8735L17.5272 31.3557L20.3635 29.1036L21.2244 28.4201L19.8582 26.3647L18.231 27.6787L15.3892 29.9732L11.9547 32.747C11.7676 32.8866 11.5875 32.9507 11.4029 32.9507C11.2526 32.9507 11.0298 32.9069 10.8212 32.6987C10.5132 32.3917 10.4885 31.974 10.7561 31.6077L12.6916 28.7076L11.2053 27.5394L9.04586 30.7615C7.70851 32.7131 7.68813 33.7446 8.95895 35.0125"
              fill="#27AAE1" />
            <path
              d="M27.1338 0.945325C26.4872 0.300233 25.9066 1.68385e-07 25.3064 1.68385e-07C24.6576 -0.000282271 23.9017 0.354744 22.9952 1.08485L18.2038 4.928L15.3938 7.18187L14.5229 7.88006L15.8869 9.91024L17.5127 8.59011L20.3256 6.30631L24.1369 3.21218C24.3244 3.07125 24.5041 3.00713 24.6895 3.00713C24.8399 3.00713 25.063 3.05091 25.2716 3.25879C25.5802 3.56665 25.6045 3.98522 25.3356 4.3507L23.1356 7.64733L24.6176 8.8203L27.0466 5.19604C28.384 3.24466 28.4044 2.21291 27.1335 0.945043"
              fill="#27AAE1" />
            <path
              d="M16.2392 19.8132C15.6144 19.1896 15.0734 18.8989 14.5369 18.8989C14.153 18.8989 13.74 19.0475 13.2748 19.3539L10.9093 20.9251L7.9042 22.922L4.34453 25.2869C4.19789 25.395 4.02237 25.4572 3.84317 25.4572C3.69596 25.4572 3.47684 25.414 3.27103 25.2083C2.95905 24.8974 2.93556 24.4596 3.21073 24.0938L5.54911 21.2076L4.01246 19.2881L1.09372 22.9347C-0.507192 24.9123 -0.167192 25.95 0.960669 27.0755C1.60585 27.7189 2.16355 28.0062 2.76825 28.0062C3.40918 28.0062 4.18402 27.6811 5.20742 26.9823L9.16087 24.3531L12.1903 22.3376L12.7905 21.9385C13.0436 21.7555 13.2935 21.6606 13.5378 21.6606C13.7657 21.6606 13.9795 21.7482 14.1386 21.9075C14.3305 22.0984 14.5799 22.519 14.1355 23.209L15.6002 24.3918L16.691 22.7585C17.4137 21.6838 17.2869 20.8579 16.2386 19.8123"
              fill="#1C75BC" />
            <path
              d="M27.727 22.0768L28.4475 21.1795L26.8675 19.2295L25.5984 20.784L23.7045 23.1034L23.4497 23.4147L24.8525 25.5392L25.1104 25.3341L25.8492 24.4148L27.727 22.0768Z"
              fill="#1C75BC" />
            <path
              d="M35.0006 13.0648C36.6004 11.088 36.2601 10.05 35.1326 8.92478C34.4874 8.28138 33.93 7.99414 33.325 7.99414C32.684 7.99414 31.9089 8.31923 30.8858 9.01798L26.5204 11.9215L23.527 13.9124L23.3025 14.0615C23.0488 14.2451 22.7989 14.3397 22.5548 14.3397C22.3272 14.3397 22.114 14.2524 21.9547 14.0931C21.8043 13.9432 21.6189 13.6528 21.7585 13.2029L20.2422 11.983L19.4022 13.2416C18.6792 14.316 18.806 15.1418 19.8546 16.188C20.48 16.8116 21.0201 17.102 21.5563 17.102C21.9405 17.102 22.3535 16.9534 22.8187 16.6467L24.8026 15.3288L27.7797 13.3509L31.749 10.7137C31.8953 10.6059 32.0709 10.5434 32.2498 10.5434C32.3976 10.5434 32.6164 10.5866 32.8222 10.7923C33.1339 11.1032 33.1577 11.541 32.8825 11.9068L30.2129 15.1769L31.7606 17.0991L35.0006 13.0653V13.0648Z"
              fill="#1C75BC" />
            <path
              d="M12.0434 13.1929L12.2999 12.8763L10.9014 10.7856L10.6712 10.9706L9.92891 11.8979L8.05481 14.2387L7.33008 15.1442L8.91401 17.0555L10.1588 15.5185L12.0434 13.1929Z"
              fill="#1C75BC" />
            <path
              d="M32.9823 28.0054C33.5898 28.0054 34.1509 27.7162 34.8015 27.0669C35.9231 25.9478 36.26 24.9133 34.6613 22.9379L31.1535 18.5414L28.9026 15.7196L28.1305 14.752L26.0854 16.115L27.476 17.8334L28.5139 19.1156L32.5304 24.0789C32.8178 24.4611 32.7937 24.8983 32.4823 25.209C32.2759 25.4149 32.0571 25.4573 31.9099 25.4573C31.731 25.4573 31.5552 25.3951 31.3882 25.2725L28.4839 23.3432L27.3062 24.8218L30.5408 26.9793C31.5679 27.68 32.3422 28.0049 32.9826 28.0049"
              fill="#FBB040" />
            <path
              d="M2.77083 8.33496C2.16331 8.33496 1.60221 8.62418 0.951367 9.27322C-0.170265 10.3928 -0.507151 11.4274 1.0915 13.4025L4.62343 17.8393L5.69552 19.1863L7.55065 21.5158L9.62293 20.1375L8.29945 18.509L6.02108 15.7052L3.22322 12.262C2.9356 11.8787 2.95966 11.4418 3.2705 11.1317C3.47688 10.9255 3.69571 10.8828 3.84293 10.8828C4.02156 10.8828 4.19651 10.9447 4.36411 11.0661L7.27973 13.0034L8.45996 11.5265L5.21283 9.3605C4.18604 8.65977 3.41148 8.33496 2.77112 8.33496"
              fill="#FBB040" />
            <path
              d="M11.5682 26.1293L13.9187 27.9922L14.8229 28.7091L16.7865 27.1164L15.2272 25.8553L12.8987 23.9714L12.5828 23.7158L10.4395 25.1452L10.6328 25.3879L11.5682 26.1293Z"
              fill="#F15A29" />
            <path
              d="M24.9643 36.0002C25.5667 36.0002 26.151 35.6974 26.8033 35.0469C28.067 33.7861 28.0447 32.7564 26.7104 30.8095L24.0663 26.8531L22.4651 24.4572L21.6549 23.2444C21.1187 22.5044 21.4955 22.0276 21.6234 21.8994C21.7831 21.7398 21.9881 21.6554 22.2162 21.6554C22.4444 21.6554 22.6817 21.7404 22.9478 21.9152L24.1419 20.4595L22.4764 19.3529C22.0158 19.0442 21.605 18.8945 21.2203 18.8945C20.685 18.8945 20.1454 19.1835 19.5234 19.8046C18.4627 20.8629 18.3378 21.6647 19.0631 22.7614L20.6439 25.1288L22.6335 28.1097L25.0107 31.6707C25.2652 32.0155 25.2406 32.4338 24.9323 32.742C24.7234 32.9501 24.5008 32.9939 24.3505 32.9939C24.1648 32.9939 23.9848 32.9292 23.8152 32.8021L20.8996 30.444L18.9567 31.985L22.6516 34.9136C23.5607 35.6454 24.316 36.0002 24.964 36.0002"
              fill="#F15A29" />
            <path
              d="M22.9446 12.4016L23.1162 12.54L25.2405 11.13L25.1007 10.9544L24.2508 10.2796L21.9014 8.41805L21.4954 8.09578L21.4971 8.09352L20.8822 7.60547L18.9419 9.17809L20.138 10.1421L20.1385 10.1412L20.6156 10.5197L22.9446 12.4016Z"
              fill="#F15A29" />
            <path
              d="M14.5329 17.4457C15.0685 17.4457 15.6075 17.1568 16.2295 16.5365C17.2908 15.4777 17.4154 14.6761 16.6898 13.5788L15.0985 11.195L13.1213 8.2331L10.7425 4.66956C10.4882 4.3247 10.5126 3.90641 10.8209 3.59883C11.0298 3.39039 11.2523 3.34662 11.4029 3.34662C11.5884 3.34662 11.7684 3.41101 11.9383 3.53811L14.8375 5.87304L16.756 4.32894L13.1007 1.42659C12.1922 0.694793 11.4372 0.340332 10.7886 0.340332C10.1865 0.340332 9.60186 0.643107 8.94989 1.29385C7.68586 2.55437 7.70851 3.58443 9.04275 5.53072L12.3122 10.4231L13.6853 12.4782L14.0983 13.0964C14.6351 13.8358 14.258 14.3132 14.1294 14.4414C13.9701 14.6007 13.7648 14.6851 13.5369 14.6851C13.309 14.6851 13.0701 14.5998 12.8034 14.4242L11.6175 15.8852L13.2765 16.9873C13.7376 17.296 14.1481 17.4457 14.5329 17.4457Z"
              fill="#F15A29" />
          </g>
          <defs>
            <clipPath id="clip0_272_363">
              <rect width="188" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <!-- toggleSearch -->
      <!-- Right Side (Icons) -->
      <div class="flex lg:gap-[20px] sm:gap-6 items-center">
        <!-- Search Icon -->
        <div class="flex items-center border-r-2 lg:border-none px-2 lg:px-0">
          <svg @click="toggleSearch" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
            fill="none" class="cursor-pointer">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M19.0281 18.1545L23.8278 22.9553L22.8385 23.9446L18.0283 19.1345C16.404 20.4738 14.3252 21.1342 12.2258 20.9777C10.1263 20.8213 8.16839 19.8601 6.76057 18.2948C5.35275 16.7294 4.60382 14.6809 4.67006 12.5767C4.73631 10.4724 5.61262 8.47507 7.11612 7.0014C8.61961 5.52773 10.6341 4.69161 12.7393 4.66753C14.8444 4.64345 16.8775 5.43327 18.4144 6.87216C19.9512 8.31106 20.8729 10.2879 20.9873 12.39C21.1017 14.4922 20.3998 16.5573 19.0281 18.1545ZM19.5998 12.8333C19.5998 11.0387 18.8869 9.31753 17.6179 8.04853C16.3489 6.77954 14.6278 6.06662 12.8331 6.06662C11.0385 6.06662 9.31737 6.77954 8.04838 8.04853C6.77938 9.31753 6.06647 11.0387 6.06647 12.8333C6.06647 14.6279 6.77938 16.349 8.04838 17.618C9.31737 18.887 11.0385 19.6 12.8331 19.6C14.6278 19.6 16.3489 18.887 17.6179 17.618C18.8869 16.349 19.5998 14.6279 19.5998 12.8333Z"
              fill="#8C8C8C" />
          </svg>
        </div>

        <!-- Profile Icon with borders -->
        <div
          class="lg:flex hidden items-center lg:px-5 border-l-2 border-r-2 border-[#8C8C8C] border-opacity-45 sm:px-3 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            class="cursor-pointer stroke-[#8C8C8C]" @click="goToLogin">
            <circle cx="12" cy="8" r="4.75" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" />
            <path
              d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
              stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Cart Icon -->
        <div class="flex items-center px-2 lg:px-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            @click="openCart" class="cursor-pointer">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.4222 19.8203C7.8442 19.8203 8.1872 20.1633 8.1872 20.5853C8.1872 21.0073 7.8442 21.3493 7.4222 21.3493C7.0002 21.3493 6.6582 21.0073 6.6582 20.5853C6.6582 20.1633 7.0002 19.8203 7.4222 19.8203Z"
              stroke="black" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z"
              stroke="black" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M2.75 3.25L4.83 3.61L5.793 15.083C5.871 16.018 6.652 16.736 7.59 16.736H18.502C19.398 16.736 20.158 16.078 20.287 15.19L21.236 8.632C21.353 7.823 20.726 7.099 19.909 7.099H5.164"
              stroke="black" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.1255 10.7949H16.8985" stroke="black" stroke-opacity="0.45" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Container for the background blur -->
    <div v-if="openCartVisible"
      class="inset-0 fixed z-10 bg-white bg-opacity-30 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div class="fixed top-0 right-0 bg-white max-w-1/2 h-[calc(100vh)] overflow-y-auto py-[20px] lg:py-[85px]"
        style="scrollbar-width: none; -ms-overflow-style: none" id="my-cart">
        <div class="relative px-[10px] lg:w-full h-full">
          <div
            class="flex justify-between mb-4 items-center lg:ml-[83px] lg:mr-[120px] border-b-[3px] border-[#000000]">
            <h3
              class="text-[20px] lg:text-[26px] font-normal font-outfit text-[#000] leading-[30px] lg:leading-[60.732px]">
              Shopping Cart
            </h3>
            <button @click="closeCart" class="text-center text-[#000000] hover:text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="text-center lg:right-0 right-[-20px]">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          <div v-for="item in cartItems" :key="item.id">
            <div class="flex items-center justify-between lg:ml-[5px] lg:pl-[81.13px] lg:pr-[120px] mb-3">
              <div class="flex items-center">
                <div class="w-[76px] h-[83px] lg:w-[156.217px] lg:h-[172.811px] border-[0.143px] border-[#000000]">
                  <img :src="item.image" alt="Item image" class="w-full h-full object-cover rounded-lg" />
                </div>
                <div class="text-left w-[250px] lg:w-full pl-[10px] lg:pl-[40.05px]">
                  <p
                    class="text-black/85 lg:block hidden text-[16px] lg:text-[20.6px] font-normal font-outfit break-words">
                    {{ item.name }}
                  </p>
                  <p style="line-height: normal;"
                    class="flex justify-center items-center text-black/85 text-[16px] lg:text-[20.6px] font-light font-outfit break-words">
                    <span>{{ item.title }}</span>
                    <span class="sm:block lg:hidden text-red-500 hover:text-red-600 cursor-pointer"
                      @click="removeFromCart(item.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 17 19" fill="none">
                        <path d="M6.625 8.5V14.125" stroke="#E43800" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.375 8.5V14.125" stroke="#E43800" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 4.75H16" stroke="#E43800" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M2.875 4.75H8.5H14.125V15.0625C14.125 16.6158 12.8658 17.875 11.3125 17.875H5.6875C4.1342 17.875 2.875 16.6158 2.875 15.0625V4.75Z"
                          stroke="#E43800" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M5.6875 2.875C5.6875 1.83947 6.52697 1 7.5625 1H9.4375C10.4731 1 11.3125 1.83947 11.3125 2.875V4.75H5.6875V2.875Z"
                          stroke="#E43800" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </p>

                  <p style="line-height: normal;"
                    class="text-[#727272] flex justify-start items-center text-[12px] lg:text-[13.794px]">
                    <span class="w-[10px] h-[10px] rounded-full mr-[6.23px] lg:w-[15.52px] lg:h-[15.52px] bg-[#a29f95]">
                    </span>
                    {{ item.productFlavour }}
                  </p>

                  <div class="flex justify-between items-center py-[5px] ">
                    <div class="flex gap-3">
                      <p style="line-height: normal;"
                        class="text-[13px] lg:text-[16px] text-center font-normal font-outfit">
                        Quantity:</p>
                      <div class="flex justify-between items-center border border-black rounded">
                        <!-- Decrease Quantity Button -->
                        <button class="w-6 h-6 flex justify-center items-center text-gray-800"
                          @click="decreaseQuantity(item)" aria-label="Decrease quantity">
                          <!-- Decrease Quantity Icon -->
                          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="2" viewBox="0 0 9 2" fill="none"
                            class="w-4 h-4">
                            <path
                              d="M8.8125 0.4375H0.1875C0.0839062 0.4375 0 0.521406 0 0.625V1.375C0 1.47859 0.0839062 1.5625 0.1875 1.5625H8.8125C8.91609 1.5625 9 1.47859 9 1.375V0.625C9 0.521406 8.91609 0.4375 8.8125 0.4375Z"
                              fill="black" fill-opacity="0.85" />
                          </svg>
                        </button>

                        <span class="text-[16px] font-medium font-outfit px-[5px]">{{ item.quantity }}</span>

                        <button class="w-6 h-6 flex justify-center items-center text-gray-800"
                          @click="increaseQuantity(item)" aria-label="Increase quantity">
                          <!-- Increase Quantity Icon -->
                          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 11 7" fill="none"
                            class="w-4 h-4">
                            <path
                              d="M9.8125 3.00548H6.0625V0.156139C6.0625 0.077426 5.97859 0.0136719 5.875 0.0136719H5.125C5.02141 0.0136719 4.9375 0.077426 4.9375 0.156139V3.00548H1.1875C1.08391 3.00548 1 3.06924 1 3.14795V3.71782C1 3.79653 1.08391 3.86029 1.1875 3.86029H4.9375V6.70963C4.9375 6.78835 5.02141 6.8521 5.125 6.8521H5.875C5.97859 6.8521 6.0625 6.78835 6.0625 6.70963V3.86029H9.8125C9.91609 3.86029 10 3.79653 10 3.71782V3.14795C10 3.06924 9.91609 3.00548 9.8125 3.00548Z"
                              fill="black" fill-opacity="0.85" stroke="black" stroke-width="0.0234375" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p class="inline-flex text-[13px] lg:text-[17px] items-center">
                      <span class="font-normal font-outfit">Rs. <span class=" font-outfit font-bold">{{
                        item.price }}</span></span>
                    </p>
                  </div>
                  <button
                    class="hidden lg:block text-[16px] underline underline-offset-2 text-[#AB0000] hover:text-red-600 cursor-pointer"
                    @click="removeFromCart(item.id)">
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-[52px] flex flex-col justify-center items-center">
            <div
              class="w-[344px] lg:w-[554px] h-[45px] lg:h-[63px] px-3.5 bg-[#272727] justify-between items-center inline-flex">
              <div class="text-white/90 text-[16px] lg:text-[26px] font-normal font-outfit">
                Rs. {{ totalPrice }}
              </div>
              <div class="justify-start items-center gap-[9px] flex">
                <button @click="toggleCheckout"
                  class="text-white/90 flex items-center gap-2 text-[16px] lg:text-[26px] font-normal font-outfit ">
                  Checkout
                  <img src="../assets/Right.png" alt="right" class="w-[25px] h-[25px] object-cover">
                </button>
              </div>
            </div>
          </div>

          <div class="  lg:mr-[65px] flex justify-end items-end sm:items-start pb-[60px]">
            <router-link @click=""
              class="flex lg:pb-[80px] lg:pr-0 flex-row items-end justify-end text-[16px] lg:text-[26px] text-black/85 font-normal font-outfit underline underline-offset-8 py-2 focus:outline-none">
              Continue Shopping
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 pt-[6px] lg:w-8 lg:h-8 text-gray-500"
                viewBox="0 0 25 24" fill="none">
                <mask id="mask0_1_6547" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25"
                  height="23.469">
                  <rect width="25" height="23.4688" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_6547)">
                  <path
                    d="M8.36068 21.5143L6.51172 19.7786L15.0794 11.7357L6.51172 3.69274L8.36068 1.95703L18.7773 11.7357L8.36068 21.5143Z"
                    fill="black" fill-opacity="0.85" />
                </g>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Links -->
    <div class="page-width">
      <!-- Mobile Navbar -->
      <div :class="[
        isMenuOpen ? 'translate-x-0 shadow-gray-400 shadow-2xl' : '-translate-x-full ',
        'fixed top-0 left-0 w-[75%] h-screen bg-white  transition-transform duration-300 ease-in-out lg:hidden ',
      ]">

        <button @click="isMenuOpen = false" class="absolute top-4 right-8 text-black text-2xl font-bold">
          ✕
        </button>
        <ul class="space-y-4 p-6">
          <!-- Home Link -->
          <li>
            <router-link to="/"
              class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] hover:font-bold">
              Home
            </router-link>
          </li>

          <!-- Our Story Link -->
          <li>
            <router-link to="/ourstory"
              class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] hover:font-bold">
              Our Story
            </router-link>
          </li>
          <!-- Products Dropdown -->
          <li>
            <div @click="toggleProductMenu"
              class="flex justify-between text-[15px] font-normal font-outfit tracking-[0.75px] hover:text-shadow-custom cursor-pointer"
              :class="{
                'text-black/85': !isProductMenuOpen,
                'text-black border-b border-gray-300 pb-[9px]':
                  isProductMenuOpen,
              }">
              <router-link to="/products">Products</router-link to="">
              <i :class="{
                'fa fa-chevron-down': !isProductMenuOpen,
                'fa fa-chevron-up': isProductMenuOpen,
              }" class="text-sm text-end pt-[4px]"></i>
            </div>

            <!--------------------------------------------- Product Dropdown  Menu for mobile device ---------------------------------------------------->
            <div v-show="isProductMenuOpen"
              class="absolute w-full bg-white pl-[17px] left-0 transition-all duration-300 ease-in-out">
              <ul class="max-w-full text-black py-[2px]">
                <li v-for="(menu, index) in menus" :key="index" class="level-0">
                  <div :style="{
                    maxHeight: isProductMenuOpen ? '110px' : '0',
                    overflow: isProductMenuOpen ? 'auto' : 'hidden',
                  }" @click="toggleSubMenu(menu.key)"
                    class="flex justify-between text-[15px] pt-[5px] pl-[17px] pr-[24px] font-normal font-outfit tracking-[0.75px] hover:text-shadow-custom cursor-pointer">
                    <span class="text-left font-medium">{{ menu.label }}</span>
                    <i :class="{
                      'fa fa-chevron-down text-sm': !subMenuState[menu.key],
                      'fa fa-chevron-up text-sm': subMenuState[menu.key],
                    }"></i>
                  </div>

                  <!-- Submenus -->
                  <ul v-if="subMenuState[menu.key]" class="pl-4">
                    <li v-for="(subMenu, subIndex) in menu.subMenus" :key="subIndex" class="level-1">
                      <div @click="toggleSubMenu(subMenu.key)"
                        class="flex justify-between items-center py-1 pl-[20px] pr-[24px] cursor-pointer">
                        <span :class="{
                          'text-sm font-light': !subMenuState[subMenu.key],
                          'text-sm font-semibold': subMenuState[subMenu.key],
                        }">
                          {{ subMenu.label }}
                        </span>
                        <i :class="{
                          'fa fa-chevron-down text-sm':
                            !subMenuState[subMenu.key],
                          'fa fa-chevron-up text-sm':
                            subMenuState[subMenu.key],
                        }"></i>
                      </div>

                      <!-- Submenu Items -->
                      <ul v-if="subMenuState[subMenu.key]" class="pl-4">
                        <li v-for="(item, itemIndex) in subMenu.items" :key="itemIndex" class="py-[2px]">
                          <button @click="selectProductCategory(item)"
                            class="w-full text-left text-[#8C8C8C] pl-2 text-sm hover:font-semibold">
                            {{ item }}
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <!-- Business Opportunity Link -->
          <li>
            <router-link to="/business-opportunity"
              class="block text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] hover:font-bold"
              :class="{ 'pt-[60px]': isProductMenuOpen}">
              Business Opportunity
            </router-link>
          </li>

          <!-- Wellness Test Link -->
          <li>
            <router-link to="/wellness-test"
              class="block text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] hover:font-bold">
              Wellness Test
            </router-link>
          </li>
        </ul>

        <!-- Footer with Account Link -->
        <div
          class="absolute bottom-20 left-0 right-0 flex justify-start p-6 border-t border-[#8C8C8C] border-opacity-45">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            class="cursor-pointer stroke-[#000000]">
            <circle cx="12" cy="8" r="4.75" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" />
            <path
              d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
              stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <router-link to="/login"
            class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] hover:font-bold">
            Account
          </router-link>
        </div>
      </div>
      <!--------------------------------------------------- Large Screen Navbar ----------------------------------------------->
      <nav>
        <ul class="list-none hidden lg:flex max-w-full mx-auto items-center space-x-20">
          <li>
            <router-link to="/ourstory"
              class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] leading-normal hover:text-shadow-custom">
              Our Story
            </router-link>
          </li>
          <div @mouseenter="openDropdown" @mouseleave="delayedCloseDropdown">
            <li>
              <router-link to="/products" :class="{
                'text-black/85': !isProductMenuOpen && !showDropdown,
                'text-black': isProductMenuOpen || showDropdown,
              }" class="flex text-[15px] font-normal font-outfit tracking-[0.75px] hover:text-shadow-custom"
                >
                Products
              </router-link>

              <div v-show="isProductMenuOpen || showDropdown"
                class="absolute w-full mt-6 left-0 right-0 max-h-auto min-h-screen border border-[#DEDEDE]">
                <!-- Wrapper div for background blur effect -->
                <div class="absolute inset-0 bg-white/30 backdrop-blur-md z-0"></div>

                <div class="relative bg-white min-h-[400px] z-10 p-6">
                  <ul class="max-w-[630px] mx-auto">
                    <!-- Loop through the main menu sections -->
                    <li v-for="(menu, index) in menus" :key="index" class="flex justify-start items-center level-0">
                      <!-- Main Menu Button -->
                      <router-link @mouseenter="toggleSubMenu(menu.key)" @mouseleave="toggleSubMenu(menu.key, false)"
                        class="min-w-[110px] inline-flex justify-between items-center h-[40px]" :class="{
                          'text-left font-normal font-outfit hover:font-semibold': true,
                          'text-black/85 font-semibold': subMenuState[menu.key],
                          'text-black/85': !subMenuState[menu.key],
                          'font-bold': $route.path === menu.link,
                        }">
                        <span class="space-y-[17px]">{{ menu.label }}</span>
                        <i class="fa fa-chevron-right text-sm pr-[20px]"></i>
                      </router-link>

                      <!-- Submenu -->
                      <ul class="flex flex-col pl-4 border-l border-[#CFCFCF]">
                        <li v-for="(subMenu, subIndex) in menu.subMenus" :key="subIndex"
                          class="relative whitespace-nowrap level-1">
                          <!-- Submenu Button -->
                          <div @click="toggleSubMenu(subMenu.key)" class="flex flex-row">
                            <button :class="{
                              'min-w-[220px] flex justify-between items-center text-left text-base font-light font-outfit': true,
                              'text-black/85': !subMenuState[subMenu.key],
                              'hover:font-semibold': true,
                              'font-semibold': subMenuState[subMenu.key],
                            }">
                              <span>{{ subMenu.label }}</span>
                              <i class="fa fa-chevron-right text-sm pr-[20px]"></i>
                            </button>

                            <!-- Submenu Items -->
                            <ul :class="{
                              'pl-4 absolute left-full top-0 border-l border-gray-300 flex flex-col space-y-[12px]': true,
                            }">
                              <li v-for="(item, itemIndex) in subMenu.items" :key="itemIndex" :class="{
                                'text-black/85': true,
                                'level-2': true,
                              }">
                                <button @click="selectProductCategory(item)"
                                  class="w-full text-left text-base font-outfit hover:font-bold">
                                  {{ item }}
                                </button>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

              </div>
            </li>
          </div>
          <li>
            <router-link to="/business-opportunity"
              class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] leading-normal hover:text-shadow-custom">
              Business Opportunity
            </router-link>
          </li>
          <li class="">
            <router-link to="/wellness-test"
              class="text-black/85 text-[15px] font-normal font-outfit tracking-[0.75px] leading-normal hover:text-shadow-custom">
              Wellness Test
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import ProductImage from "../assets/ProductImg.png";
import { useSearchPopup } from "../compossable/useSearchPopup";

// Dropdown state
const showDropdown = ref(false);
const subMenuState = ref({});

////////////////////////////////////////// Search Popup Methods //////////////////////////////////////////////////
const { toggleSearch } = useSearchPopup();

// Dynamic menus with submenu items
const menus = ref([
  {
    key: "byNeed",
    label: "By Need",
    subMenus: [
      {
        key: "healthAndNutrition",
        label: "Health & Nutrition",
        items: [
          "General Nutrition",
          "Sports Nutrition",
          "Weight Management",
          "Accessory",
        ],
      },
    ],
  },
  {
    key: "byType",
    label: "By Type",
    subMenus: [
      {
        key: "beauty",
        label: "Beauty",
        items: ["Skincare", "Makeup", "Haircare"],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        items: ["Cookware", "Utensils", "Appliances"],
      },
    ],
  },
]);

// Timer reference for closeDropdown delay
let closeDropdownTimer = null;

// Methods
const toggleSubMenu = (menuKey) => {
  subMenuState.value[menuKey] = !subMenuState.value[menuKey];
};

const openDropdown = () => {
  clearTimeout(closeDropdownTimer);
  showDropdown.value = true;
};

const closeDropdown = () => {
  showDropdown.value = false;
};

const delayedCloseDropdown = () => {
  closeDropdownTimer = setTimeout(() => {
    closeDropdown();
  }, 300);
};

const selectProductCategory = (item) => {
  console.log("Selected category:", item);
};

// Shopping cart functionality
const cartItems = ref([
  {
    id: 1,
    productFlavour: "Banana Caramel Flavour",
    name: "Shape Shift",
    title: "Meal Replacement Powder 500g",
    image: ProductImage,
    price: 250.0,
    quantity: 1,
  },
  {
    id: 2,
    productFlavour: "Vanilla Flavour",
    name: "Shape Shift",
    title: "Meal Replacement Powder 500g",
    image: ProductImage,
    price: 250.0,
    quantity: 1,
  },
  {
    id: 3,
    productFlavour: "Chocolate Flavour",
    name: "Shape Shift",
    title: "Meal Replacement Powder 500g",
    image: ProductImage,
    price: 250.0,
    quantity: 1,
  },
]);

const decreaseQuantity = (item) => {
  const cartItem = cartItems.value.find((cartItem) => cartItem.id === item.id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
    updateCartItemPrice(cartItem.id);
  }
};

const increaseQuantity = (item) => {
  const cartItem = cartItems.value.find((cartItem) => cartItem.id === item.id);
  if (cartItem) {
    cartItem.quantity++;
    updateCartItemPrice(cartItem.id);
  }
};

const updateCartItemPrice = (itemId) => {
  const item = cartItems.value.find((item) => item.id === itemId);
  if (item) {
    item.totalPrice = item.price * item.quantity;
  }
};

// Initialize totalPrice for all items
const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const openCartVisible = ref(false);

const openCart = () => {
  openCartVisible.value = true;
};

const closeCart = () => {
  openCartVisible.value = false;
};

const removeFromCart = (itemId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
};

const router = useRouter();
const goToLogin = () => {
  router.push("/login");
};
const toggleCheckout = () => {
  openCartVisible.value = false;
  router.push("/checkout-form");
};
const isMenuOpen = ref(false);


</script>


<!-- -------------------------------for mobile ------------------------------>
<script>
export default {
  data() {
    return {
      isProductMenuOpen: false,
      subMenuState: {},
      menus: [
        {
          label: "Health & Nutrition",
          key: "health",
          subMenus: [
            {
              label: "General Nutrition",
              key: "general",
              items: ["Protein", "Vitamins"],
            },
            {
              label: "Weight Management",
              key: "weight",
              items: ["Supplements"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleProductMenu() {
      this.isProductMenuOpen = !this.isProductMenuOpen;
    },
    toggleSubMenu(menuKey) {
      // Safely toggle submenu state
      this.$set(this.subMenuState, menuKey, !this.subMenuState[menuKey]);
    },
    selectProductCategory(category) {
      console.log("Selected category:", category);
    },
  },
};
</script>

<style>
.level-0>ul {
  display: none;
}

.level-0:hover>ul {
  display: block;
}

.level-1>div>ul {
  display: none;
}

.level-1:hover>div>ul {
  display: block;
}
</style>
