package psp.util;

import com.nexacro17.xapi.data.DataSet;

public class DataSetUtil {
	public static String  dsGet(DataSet ds, int rowno, String colid) throws Exception{
		String value = null;
		value = ds.getString(rowno, colid);
		if(value == null)
			return "존재하지 않음";
		else
			return value;
	}
}
