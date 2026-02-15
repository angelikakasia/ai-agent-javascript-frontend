import { apiRequest } from "./api"

export const getAgents = () => apiRequest("/agents")
export const getAgent = (id) => apiRequest(`/agents/${id}`)
export const createAgent = (data) => apiRequest("/agents", "POST", data)
export const updateAgent = (id, data) =>
  apiRequest(`/agents/${id}`, "PUT", data)
export const deleteAgent = (id) =>
  apiRequest(`/agents/${id}`, "DELETE")

export const getActions = () => apiRequest("/actions")

export const assignAction = (id, action_id) =>
  apiRequest(`/agents/${id}/actions`, "POST", { action_id })

export const removeAction = (id, action_id) =>
  apiRequest(`/agents/${id}/actions/${action_id}`, "DELETE")
