import reducer, { completeOnboarding, loadOnboardingStatus } from './onboardingSlice';

const initial = reducer(undefined, { type: '@@INIT' });

describe('onboardingSlice', () => {
  it('starts not completed and not hydrated', () => {
    expect(initial).toEqual({ completed: false, hydrated: false });
  });

  it('takes the stored flag and marks hydrated once it loads', () => {
    const state = reducer(initial, loadOnboardingStatus.fulfilled(true, 'req'));
    expect(state).toEqual({ completed: true, hydrated: true });
  });

  it('still hydrates if the read fails', () => {
    const state = reducer(
      initial,
      loadOnboardingStatus.rejected(new Error('nope'), 'req', undefined),
    );
    expect(state.hydrated).toBe(true);
    expect(state.completed).toBe(false);
  });

  it('marks completed when onboarding finishes', () => {
    const state = reducer(initial, completeOnboarding.fulfilled(undefined, 'req', undefined));
    expect(state.completed).toBe(true);
  });
});
