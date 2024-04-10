//todo: JAVA substring mas largo sin chars repetidos
import java.util.*;
import java.util.Scanner;

public class java {

    public static String stringops(String str) {
        String rojo = "\u001B[41m";
        String reset = "\u001B[0m";
        String amarillo = "\u001B[33m";

        if (str == null || str.length() == 0 || str.isEmpty()) {
            System.out.println(rojo + "No valido" + reset);
            return "no valido";
        }
        // quito caracteres no ascii (stack)
        str.replaceAll("[^\\x00-\\x7F]", "");

        Map<Character, Integer> map = new HashMap<>();
        int inicio = 0;
        int maxLen = 0;
        int inicioSofar = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (map.containsKey(ch)) {
                inicio = Math.max(map.get(ch) + 1, inicio);
            }
            if (i - inicio + 1 > maxLen) {
                maxLen = i - inicio + 1;
                inicioSofar = inicio;
            }
            map.put(ch, i);
        }
        System.out.println("substring mas largo sin chars repetidos: " + amarillo
                + str.substring(inicioSofar, inicioSofar + maxLen) + reset);
        return str.substring(inicioSofar, inicioSofar + maxLen);
    }

    public static void main(String[] args) {
        // todo: ver como poner color de fondo en el texto
        String reset = "\u001B[0m";
        String amarillo = "\u001B[33m";

        Scanner myObj = new Scanner(System.in);

        System.out.println(amarillo + "Input" + reset + " ->");

        String input = myObj.nextLine();
        myObj.close();
        stringops(input);
        // ! esto deberia funcionar pero no lo hace
        // ? Como funciona el operador terciario en java???
        // String aux=(res.equals("no valido") ? (amarillo + "no valido"+ reset) : res
        // );

        // //System.out.println("substring mas largo sin chars repetidos: " + amarillo +
        // res + reset);
    }
}
