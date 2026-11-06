import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from "../router/router.ts"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify'
import LoadingUI from './assets/LoadingUI.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
    />
    <Suspense fallback={<LoadingUI />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
