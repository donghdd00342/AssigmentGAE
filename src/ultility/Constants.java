package ultility;

public class Constants {
    private Constants() {
    }

    public static final Integer OK = 200;
    public static final Integer CREATED = 201;

    public static final Integer BAD_REQUEST = 400;
    public static final String CREATE_NEW_CANNOT_ALREADY_HAVE_AN_ID = "A new Product cannot already have an ID";
    public static final String PRODUCT_DOES_NOT_EXIST = "The Product does not exist!";
    public static final String INVALID_PARAMETER = "invalid parameter!";
    public static final String ID_NOT_FOUND = "Id not found!";

    public static final Integer INTERNAL_SERVER_ERROR = 500;
    public static final String SOMETHING_WENT_WRONG = "Something went wrong!";

    public static final int ACTION_GET_DETAIL = 2;
    public static final int ACTION_GET_LIST = 1;
}
