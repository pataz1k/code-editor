export enum initialCodeEnum {
	'javascript' = `// Implement your Fibonacci function here
  function fib(n) {
    // Your code here
  }
  
  // Test your function
  console.log(fib(10));`,

	'go' = `package main
  
  import "fmt"
  
  func fib(n int) int {
      // Your code here
  }
  
  func main() {
      fmt.Println(fib(10))
  }`,

	'python' = `def fib(n):
      # Your code here
      pass
  
  # Test your function
  print(fib(10))`,
}

export type LanguageType = keyof typeof initialCodeEnum
