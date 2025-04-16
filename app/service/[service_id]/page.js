import axios from "axios";

export default async function Page({ params }) {
  const { service_id } = await params;
  const API = "http://localhost:3000/api/service";

  const response = await axios.get(API, { params: { service_id: service_id } });

  return <>{JSON.stringify(response.data)}</>;
}
