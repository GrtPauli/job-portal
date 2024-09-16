import {
  ProfileDetailsPage,
  AppliedJobsPage,
  BookmarksPage,
  HomePage,
  JobDetailsPage,
  JobListingPage,
  PostJobPage,
  PostResumePage,
  ProfilePage,
  RegisterPage,
  ResumePage,
  SignInPage,
  DeleteAccountPage,
} from "./pages";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/jobs",
    children: [
      {index: true, element: <JobListingPage />},
      {path: 'job-details', element: <JobDetailsPage />},
      {path: 'post', element: <PostJobPage />},
    ]
  },
  {
    path: "/profile",
    children: [
      {index: true, element: <ProfilePage />},
      {path: 'resume', element: <ResumePage />},
      {path: 'edit-resume', element: <PostResumePage />},
      {path: 'details', element: <ProfileDetailsPage />},
      {path: 'bookamrks', element: <BookmarksPage />},
      {path: 'applied-jobs', element: <AppliedJobsPage />},
      {path: 'close-account', element: <DeleteAccountPage />},
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;