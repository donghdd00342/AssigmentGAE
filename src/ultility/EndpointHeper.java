package ultility;

import com.google.gson.Gson;
import entity.Product;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Random;

public class EndpointHeper {
    private EndpointHeper() {
    }

    private static Gson gson = new Gson();

    public static void getAction(HttpServletRequest request, GetActionCallback getActionCallback) {
        int action = 0;
        long id = 0;
        String requestURI = request.getRequestURI();
        String[] splitURI = requestURI.split("/");
        String strId;
        if (splitURI.length == 5) {
            action = Constants.ACTION_GET_DETAIL;
            strId = splitURI[splitURI.length - 1];
            id = Long.parseLong(strId);
        } else if (splitURI.length == 4) {
            action = Constants.ACTION_GET_LIST;
        }
        getActionCallback.setAction(action);
        getActionCallback.setId(id);
    }

    public static Product getProduct(HttpServletRequest request) {
        try {
            InputStream ir = request.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader((ir)));
            StringBuilder stringBuilder = new StringBuilder();
            String input;
            while ((input = bufferedReader.readLine()) != null) {
                stringBuilder.append(input);
            }
            Product product = gson.fromJson(stringBuilder.toString(), Product.class);
            return product;
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }
    }

    private static String[] beginning = {"Kr", "Ca", "Ra", "Mrok", "Cru",
            "Ray", "Bre", "Zed", "Drak", "Mor", "Jag", "Mer", "Jar", "Mjol",
            "Zork", "Mad", "Cry", "Zur", "Creo", "Azak", "Azur", "Rei", "Cro",
            "Mar", "Luk"};
    private static String[] middle = {"air", "ir", "mi", "sor", "mee", "clo",
            "red", "cra", "ark", "arc", "miri", "lori", "cres", "mur", "zer",
            "marac", "zoir", "slamar", "salmar", "urak"};
    private static String[] end = {"d", "ed", "ark", "arc", "es", "er", "der",
            "tron", "med", "ure", "zur", "cred", "mur"};

    private static String[] producers = {"Samsung", "Apple", "Google", "Sony", "LG", "Panasonic", "Tosiba", "Facebook"};

    private static Random rand = new Random();

    public static String randName() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder
                .append(beginning[rand.nextInt(beginning.length)])
                .append(middle[rand.nextInt(middle.length)])
                .append(end[rand.nextInt(end.length)]);
        return stringBuilder.toString();
    }

    public static String randProducer() {
        return producers[rand.nextInt(producers.length)];
    }

    public static int randInt(int min, int max) {
        return rand.nextInt((max - min) + 1) + min;
    }

    public static String[] getAllProducers() {
        return producers;
    }
}
