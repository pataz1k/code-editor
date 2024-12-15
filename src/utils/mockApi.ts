interface ExecuteCodeRequest {
	language: string
	code: string
}

interface ExecuteCodeResponse {
	status: 'success' | 'error'
	output?: string
	error?: string
}

export const executeCode = async (
	request: ExecuteCodeRequest
): Promise<ExecuteCodeResponse> => {
	// Имитация задержки сети
	await new Promise((resolve) => setTimeout(resolve, 1000))

	// Простая "выполнение" кода
	if (Math.random() > 0.2) {
		// 80% шанс успеха
		return {
			status: 'success',
			output: 'Hello, world!\n',
		}
	} else {
		// 20% шанс ошибки
		return {
			status: 'error',
			error: 'SyntaxError: Unexpected token',
		}
	}
}
