import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LetterCombinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese el número de teléfono: ");
        String phoneNumber = scanner.nextLine();
        List<String> combinations = letterCombinations(phoneNumber);

        System.out.println("\nLista de combinaciones:");
        for (String combination : combinations) {
            System.out.println(combination);
        }

        System.out.println("\nNúmero de combinaciones posibles: " + combinations.size());
        scanner.close();
    }

    public static List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return new ArrayList<>();
        }

        String[] mapping = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> result = new ArrayList<>();

        backtrack("", 0, digits, mapping, result);

        return result;
    }

    private static void backtrack(String currentCombination, int index, String digits, String[] mapping, List<String> result) {
        if (index == digits.length()) {
            result.add(currentCombination);
        } else {
            int digit = Character.getNumericValue(digits.charAt(index));
            String letters = mapping[digit];

            for (int i = 0; i < letters.length(); i++) {
                backtrack(currentCombination + letters.charAt(i), index + 1, digits, mapping, result);
            }
        }
    }
}
