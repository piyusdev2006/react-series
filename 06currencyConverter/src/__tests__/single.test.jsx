import { describe, it, expect, vi, afterEach } from "vitest";
import {
  formatRate,
  currencyLabels,
  popularCurrencies,
} from "../utils/currency";
import { fetchJson } from "../utils/api";

afterEach(() => {
  if (global.fetch && global.fetch.mockReset) global.fetch.mockReset();
});

describe("currency utilities", () => {
  it("contains USD label", () => {
    expect(currencyLabels.usd).toBe("US Dollar");
  });

  it("exports popular currencies", () => {
    expect(Array.isArray(popularCurrencies)).toBe(true);
    expect(popularCurrencies).toContain("usd");
  });

  it("formats a numeric rate", () => {
    const formatted = formatRate(1.23456);
    expect(typeof formatted).toBe("string");
    expect(formatted).toMatch(/1\.2346|1.2346/);
  });
});

describe("fetchJson", () => {
  it("parses JSON when response is OK", async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    const data = await fetchJson("https://example.org");
    expect(data).toEqual({ success: true });
  });

  it("throws when fetch fails and retries exhausted", async () => {
    const err = new Error("network");
    global.fetch = vi.fn().mockRejectedValue(err);
    await expect(
      fetchJson("https://example.org", { retries: 0 }),
    ).rejects.toThrow();
  });
});
