import { OpenbenttRedirect } from "@/components/openbentt-redirect";
import { resolveOpenbenttUrl } from "@/lib/openbentt-url";

export default async function GoOpenbenttPage() {
  const url = await resolveOpenbenttUrl();
  return <OpenbenttRedirect url={url} />;
}
