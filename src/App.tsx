import React, { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './components/ui/select'
import { initialCodeEnum, LanguageType } from './constants/initalCode'
import { exampleTask } from './constants/task'
import { Button } from './components/ui/button'
import { executeCode } from './utils/mockApi'

const App: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] =
		useState<LanguageType>('javascript')
	const [code, setCode] = useState<string>(initialCodeEnum.javascript)
	const [output, setOutput] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [executionStatus, setExecutionStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle')

	const handleLanguageChange = (value: LanguageType) => {
		setSelectedLanguage(value)
		setCode(initialCodeEnum[value])
	}

	const handleCodeChange = (value: string | undefined) => {
		setCode(value!)
	}

	const handleRunCode = async () => {
		setIsLoading(true)
		setOutput('Loading...')
		setExecutionStatus('idle')
		try {
			const result = await executeCode({ language: selectedLanguage, code })
			if (result.status === 'success') {
				setOutput(result.output!)
				setExecutionStatus('success')
			} else {
				setOutput(`Error: ${result.error}`)
				setExecutionStatus('error')
			}
		} catch (error) {
			setOutput(`Error: ${(error as Error).message}`)
			setExecutionStatus('error')
		}
		setIsLoading(false)
	}

	return (
		<div className="flex flex-col md:flex-row gap-6 items-stretch justify-center h-screen p-6 bg-gray-100">
			<div className="w-full md:w-1/2 flex flex-col">
				<div className="flex-grow overflow-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
					<h2 className="text-2xl font-bold mb-4">Task</h2>
					<pre className="whitespace-pre-wrap font-mono text-sm">
						{exampleTask}
					</pre>
					<div className="mt-10">
						<h2 className="text-xl font-bold mb-2">Output</h2>
						<pre
							className={`p-4 rounded-lg whitespace-pre-wrap ${
								executionStatus === 'success'
									? 'bg-green-100'
									: executionStatus === 'error'
										? 'bg-red-100'
										: 'bg-gray-100'
							}`}
						>
							{output || 'Run your code to see the output'}
						</pre>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 flex flex-col">
				<div className="flex-grow overflow-auto p-6 rounded-lg bg-white shadow-lg border border-gray-200">
					<div className="flex justify-between mb-4 px-2">
						<h1 className="text-2xl font-bold">Code Editor</h1>
						<div className="flex gap-5">
							<Select
								value={selectedLanguage}
								onValueChange={handleLanguageChange}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="javascript">JavaScript</SelectItem>
									<SelectItem value="go">Go</SelectItem>
									<SelectItem value="python">Python</SelectItem>
								</SelectContent>
							</Select>
							<Button onClick={handleRunCode} disabled={isLoading}>
								{isLoading ? 'Running...' : 'Run'}
							</Button>
						</div>
					</div>
					<CodeEditor
						key={selectedLanguage}
						language={selectedLanguage}
						initialCode={code}
						onChange={handleCodeChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
