export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export function toggleView(view) {
  return {
    type: TOGGLE_VIEW,
    view
  }
};