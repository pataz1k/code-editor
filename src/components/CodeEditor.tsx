import { FC } from 'react'
import Editor from '@monaco-editor/react'
import { LanguageType } from '@/constants/initalCode'

interface ICodeEditor {
	initialCode?: string
	language?: LanguageType
	onChange?: (value: string | undefined) => void
}

const CodeEditor: FC<ICodeEditor> = ({ initialCode, language, onChange }) => {
	console.log('Lang', language)
	return (
		<Editor
			height="90%"
			language={language}
			defaultValue={initialCode}
			theme="vs-dark"
			onChange={onChange}
			options={{
				minimap: { enabled: false },
				fontSize: 14,
				lineNumbers: 'on',
				roundedSelection: false,
				scrollBeyondLastLine: false,
				readOnly: false,
				automaticLayout: true,
			}}
		/>
	)
}

export default CodeEditor
