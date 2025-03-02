package pkg

import (
	"strconv"
	"time"
)

// StrToUint64 преобразует строку в uint64.
func StrToUint64(str string) (uint64, error) {
	return strconv.ParseUint(str, 10, 64)
}

// parseInt преобразует строку в указатель на int. Возвращает nil при ошибке.
func parseInt(str string) *int {
	if val, err := strconv.Atoi(str); err == nil {
		return &val
	}
	return nil
}

// parseFloat преобразует строку в указатель на float64. Возвращает nil при ошибке.
func parseFloat(str string) *float64 {
	if val, err := strconv.ParseFloat(str, 64); err == nil {
		return &val
	}
	return nil
}

// parseBool преобразует строку в bool. Возвращает false при ошибке.
func parseBool(str string) bool {
	result, _ := strconv.ParseBool(str)
	return result
}

// parseOptionalBool преобразует строку в указатель на bool. Возвращает nil если строка пустая.
func parseOptionalBool(str string) *bool {
	if str == "" {
		return nil
	}
	result := parseBool(str)
	return &result
}

// parseDateTime преобразует строку в указатель на time.Time. Возвращает nil при ошибке или пустой строке.
func parseDateTime(dateTimeStr string) *time.Time {
	if dateTimeStr == "" {
		return nil
	}
	parsedDateTime, err := time.Parse("2006-01-02 15:04:05", dateTimeStr)
	if err != nil {
		return nil
	}
	return &parsedDateTime
}

// StrToInt преобразует строку в int. При ошибке возвращает 0.
func StrToInt(s string) (int, error) {
	return strconv.Atoi(s)
}

// intPtr возвращает указатель на переданное значение int.
func intPtr(i int) *int {
	return &i
}
