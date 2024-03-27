export const AVAILABLE_MODELS = ['gpt-4-0125-preview', 'gpt-4-1106-preview'] as const;

export type AvailableModel = (typeof AVAILABLE_MODELS)[number];

export const isAvailableModel = (model: string): model is AvailableModel => {
	return AVAILABLE_MODELS.includes(model as AvailableModel);
};
