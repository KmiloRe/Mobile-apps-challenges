
import java.util.*;
import java.util.Scanner;

public class java {

    public static String stringops(String str) {
        if (str == null || str.length() == 0 || str.isEmpty() ) {
            return "no valido";
        }
            //quito caracteres no ascii (stack)
        str.replaceAll("[^\\x00-\\x7F]", "");

        Map<Character, Integer> map = new HashMap<>();
        int inicio = 0;
        int maxLen = 0;
        int inicioIndex = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (map.containsKey(ch)) {
                inicio = Math.max(map.get(ch) + 1, inicio);
            }
            if (i - inicio + 1 > maxLen) {
                maxLen = i - inicio + 1;
                inicioIndex = inicio;
            }
            map.put(ch, i);
        }
        return str.substring(inicioIndex, inicioIndex + maxLen);
    }

    public static void main(String[] args) {
        //String input = "abcadcbsb$aiaosaftyuhjmnp$56a";
        //String input = "sdasdsadsajaklsldkskoispia#$6tas";
    //* para colores
    String rojo = "\u001B[41m";
    String reset = "\u001B[0m"; 
    String amarillo = "\u001B[33m";
    // Declaring the color 
    // Custom declaration 
    //public static final String ANSI_YELLOW = "\u001B[33m"; 
  
        
        Scanner myObj = new Scanner(System.in); 

        
        System.out.println(amarillo + "Enter username" + reset);

        String input = myObj.nextLine();
        myObj.close();
        String res = stringops(input);
        String aux=(res.equals("no valido") ? (amarillo + "no valido"+ reset) : res );
        
        System.out.println("substring mas largo sin chars repetidos: " + aux);
    }
}