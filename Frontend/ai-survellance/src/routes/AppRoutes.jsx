import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import OrganizationChoice from "../organization/OrganizationChoice";
import CreateOrganization from "../organization/CreateOrganization";
import JoinOrganization from "../organization/JoinOrganization";

import AdminDashboard from "../admin/AdminDashboard";
import ManageUsers from "../admin/ManageUsers";
import UploadVideo from "../admin/UploadVideo";
import Profile from "../admin/Profile";

import UserDashboard from "../user/UserDashboard";

import SuperAdminDashboard from "../superadmin/SuperAdminDashboard";
import ManageOrganizations from "../superadmin/ManageOrganizations";
import ApproveAdmins from "../superadmin/ApproveAdmins";
import OrganizationCreated from "../organization/OrganizationCreated";
import UserUploadVideo from "../user/UserUploadVideo";
import UserProfile from "../user/UserProfile";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/organization" element={<OrganizationChoice />} />
      <Route path="/create-organization" element={<CreateOrganization />} />
      <Route path="/organization-created" element={<OrganizationCreated/>}/>
      <Route path="/join-organization" element={<JoinOrganization />} />


      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/upload-video" element={<UploadVideo />} />
      <Route path="/admin/profile" element={<Profile />} />

      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/upload" element={<UserUploadVideo/>}/>
      <Route path="/user/profile" element={<UserProfile/>}/>

      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
      <Route path="/superadmin/organizations" element={<ManageOrganizations />} />
      <Route path="/superadmin/approve-admins" element={<ApproveAdmins />} />

    </Routes>
  );
};

export default AppRoutes;