import { PermissionKey } from "../_unused_components/authorization/permission-key";
export interface MyUserProfile {
  id: string;
  name: string;
  permissions: PermissionKey[];
}
